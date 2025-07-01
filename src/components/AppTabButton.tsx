import { ReactNode } from "react";

type AppTabButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
};

export default function AppTabButton({
  children,
  active,
  onClick,
  className = "",
}: AppTabButtonProps) {
  const defaultClass = active
    ? "bg-blue-500 text-white"
    : "bg-white text-blue-500 border-gray-300";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm flex items-center gap-2 transition-colors ${
        className || defaultClass
      }`}
    >
      {children}
    </button>
  );
}
