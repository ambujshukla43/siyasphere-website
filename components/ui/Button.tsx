import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-[#7FC6C4] text-gray-950 hover:bg-cyan-400 focus:ring-[#7FC6C4] shadow-lg hover:shadow-xl shadow-[#7FC6C4]/20",
    secondary:
      "border-2 border-[#7FC6C4] text-[#7FC6C4] hover:bg-[#7FC6C4]/10 focus:ring-[#7FC6C4]",
    outline:
      "border-2 border-[#7FC6C4] text-[#7FC6C4] hover:bg-[#7FC6C4]/20 focus:ring-[#7FC6C4]",
  };

  const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  );
}

