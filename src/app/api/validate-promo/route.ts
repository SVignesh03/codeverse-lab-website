import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Reuse connection across hot-reloads/invocations in serverless environments
const uri = process.env.MONGODB_URI || "";
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function POST(req: Request) {
  try {
    const { promoCode } = await req.json();

    if (!promoCode) {
      return NextResponse.json(
        { valid: false, message: "Code required" },
        { status: 400 },
      );
    }

    const connectedClient = await clientPromise;

    // Calling db() without arguments uses the DB specified in MONGODB_URI (codeverselab)
    const db = connectedClient.db();

    const promo = await db.collection("promocodes").findOne({
      code: promoCode.trim().toUpperCase(),
      isActive: true,
    });

    if (!promo) {
      return NextResponse.json({
        valid: false,
        message: "Invalid promo code",
      });
    }

    return NextResponse.json({
      valid: true,
      discount: promo.discount, // e.g., "10% OFF" or flat amount
      message: "Promo code applied!",
    });
  } catch (error) {
    console.error("Promo validation error:", error);
    return NextResponse.json(
      { valid: false, message: "Server error" },
      { status: 500 },
    );
  }
}
