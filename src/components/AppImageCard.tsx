import Image from "next/image";
import { useEffect, useState } from "react";

type AppImageCardProps = {
  file: string;
  active: boolean;
  focus: boolean;
};

export default function AppImageCard({ file, focus }: AppImageCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind 'sm'
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isFilteredOut = !focus;

  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden shadow-md group transition-all duration-300 ${
        isFilteredOut ? "opacity-30" : ""
      }`}
      style={{
        padding: "clamp(0.25rem, 1vw, 0.75rem)",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-blue-500 rounded-xl">
        <Image
          src={`/images/${file}`}
          alt=""
          layout="fill"
          objectFit="contain"
          className={`transition-all duration-300 group-hover:scale-105 ${
            isMobile ? "" : "grayscale group-hover:grayscale-0"
          }`}
        />
      </div>
    </div>
  );
}
