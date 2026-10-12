import type { ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  onSelect: () => void;
};

export default function TabButton({ children, onSelect }: TabButtonProps) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
