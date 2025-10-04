import Image from "next/image";

type TeamMemberCardProps = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export default function FoundersCard({
  name,
  role,
  description,
  image,
}: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto border-2 border-orange-500 rounded-2xl p-4 bg-orange-50 shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative w-48 h-56 rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-orange-600 font-medium mt-1">{role}</p>
      <p className="text-gray-600 text-sm mt-3">{description}</p>
    </div>
  );
}