"use client";
import { useState } from "react";
import AppTabButton from "./AppTabButton";
import AppImageCard from "./AppImageCard";

type Department = {
  name: string;
};

type Character = {
  id: number;
  name: string;
  department: string;
  role: string;
  file: string;
};

const departments: Department[] = [
  { name: "Design" },
  { name: "Marketing" },
  { name: "Development" },
];

const characters: Character[] = [
  {
    id: 1,
    name: "Vignesh",
    department: "Development",
    role: "Full Stack Developer",
    file: "vignesh.png",
  },
//   {
//     id: 2,
//     name: "Ian Dominguez",
//     department: "Development",
//     role: "Backend Developer",
//     file: "ian.png",
//   },
//   {
//     id: 3,
//     name: "Eliza Howell",
//     department: "Design",
//     role: "UX Designer",
//     file: "eliza.png",
//   },
//   {
//     id: 4,
//     name: "Alison Cobb",
//     department: "Development",
//     role: "Frontend Developer",
//     file: "alison.png",
//   },
//   {
//     id: 5,
//     name: "Minnie Brown",
//     department: "Development",
//     role: "iOS Developer",
//     file: "minnie.png",
//   },
//   {
//     id: 6,
//     name: "Gabby Hoffman",
//     department: "Marketing",
//     role: "Marketing Analyst",
//     file: "gabby.png",
//   },
//   {
//     id: 7,
//     name: "Ryan Hernandez",
//     department: "Marketing",
//     role: "Market Researcher",
//     file: "ryan.png",
//   },
//   {
//     id: 8,
//     name: "Tiffany Chang",
//     department: "Design",
//     role: "Product Designer",
//     file: "tiffany.png",
//   },
//   {
//     id: 9,
//     name: "Noah Garcia",
//     department: "Design",
//     role: "iOS Designer",
//     file: "noah.png",
//   },
//   {
//     id: 10,
//     name: "Mischa Ford",
//     department: "Design",
//     role: "Graphic Designer",
//     file: "mischa.png",
//   },
//   {
//     id: 11,
//     name: "Andy Simpson",
//     department: "Marketing",
//     role: "Marketing Manager",
//     file: "andy.png",
//   },
//   {
//     id: 12,
//     name: "Josef Morgan",
//     department: "Design",
//     role: "Android Designer",
//     file: "josef.png",
//   },
];

export default function Team() {
  const [activeDept, setActiveDept] = useState<string>("");
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div id="features" className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-14">
        <div className="flex flex-col space-y-8">
          <div className="w-full md:w-8/12 space-y-2 mx-auto text-center">
            <div className="text-4xl md:text-5xl font-black">Meet the team</div>
            <div className="text-lg font-semibold text-gray-600">
              Creative, driven, and ready to bring ideas to life.
            </div>
          </div>

          <div className="w-full md:w-8/12 mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-5">
              {departments.map((department) => (
                <AppTabButton
                  key={department.name}
                  active={activeDept === department.name}
                  onClick={() =>
                    setActiveDept(
                      activeDept === department.name ? "" : department.name
                    )
                  }
                >
                  {department.name}
                </AppTabButton>
              ))}
            </div>
          </div>

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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
