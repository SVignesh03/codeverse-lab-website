import { MongoClient } from "mongodb";

// Node v24 automatically loads .env.local when using the --env-file flag
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ Error: MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

const samplePromos = [
  {
    code: "WELCOME10",
    discount: "10% OFF",
    isActive: true,
    createdAt: new Date(),
  },
  {
    code: "CODEVERSE20",
    discount: "20% OFF",
    isActive: true,
    createdAt: new Date(),
  },
  {
    code: "FREELANCE50",
    discount: "Flat ₹5,000 OFF",
    isActive: true,
    createdAt: new Date(),
  },
  {
    code: "EXPIRED15",
    discount: "15% OFF",
    isActive: false,
    createdAt: new Date(),
  },
];

async function seedDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("🔌 Connected to MongoDB Atlas...");

    const db = client.db();
    const collection = db.collection("promocodes");

    await collection.createIndex({ code: 1 }, { unique: true });

    for (const promo of samplePromos) {
      await collection.updateOne(
        { code: promo.code },
        { $set: promo },
        { upsert: true },
      );
    }

    console.log("✅ Promo codes seeded successfully!");
    console.log(
      "Inserted codes: WELCOME10, CODEVERSE20, FREELANCE50, EXPIRED15",
    );
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await client.close();
  }
}

seedDB();
