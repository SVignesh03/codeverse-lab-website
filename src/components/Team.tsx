"use client";
import { useState } from "react";
import AppTabButton from "./AppTabButton";
import AppImageCard from "./AppImageCard";
import characters from "@/data/characters.json";
import departments from "@/data/departments.json";

// type Department = {
//   name: string;
// };

// type Character = {
//   id: number;
//   name: string;
//   department: string;
//   role: string;
//   file: string;
// };

export default function Team() {
  const [activeDept, setActiveDept] = useState<string>("");
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div id="features" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-14">
        <div className="flex flex-col space-y-8">
          {/* Section Heading */}
          <div className="w-full md:w-8/12 space-y-2 mx-auto text-center">
            <div className="text-4xl md:text-5xl font-black text-orange-500">
              Meet the team
            </div>
            <div className="text-lg font-semibold text-gray-600">
              Creative, driven, and ready to bring ideas to life.
            </div>
          </div>

          {/* Tabs */}
          <div className="w-full md:w-8/12 mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-5">
              {departments.map((department) => (
                <AppTabButton
                  key={department.name}
                  active={activeDept === department.name}
                  onClick={() =>
                    setActiveDept(
                      activeDept === department.name ? "" : department.name,
                    )
                  }
                  className={`${
                    activeDept === department.name
                      ? "bg-orange-500 text-white"
                      : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                  }`}
                >
                  {department.name}
                </AppTabButton>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-[clamp(0.75rem,2vw,1.5rem)]">
            {characters.map((character) => (
              <div
                key={character.id}
                className="w-[calc(25%-clamp(0.5rem,1vw,1rem))] min-w-[160px] aspect-[3/4] cursor-pointer"
                onClick={() =>
                  setActiveId(character.id === activeId ? null : character.id)
                }
              >
                <AppImageCard
                  file={character.file}
                  active={character.id === activeId}
                  focus={
                    activeDept === "" || activeDept === character.department
                  }
                  className="ring-2 ring-orange-400"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
