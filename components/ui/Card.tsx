import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles = "bg-gray-900 rounded-xl border border-gray-800 p-6 lg:p-8";
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/50 hover:-translate-y-1"
    : "";

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
}

