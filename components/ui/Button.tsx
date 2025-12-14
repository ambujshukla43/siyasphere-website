import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-400 focus:ring-primary-400 shadow-lg hover:shadow-xl shadow-primary-500/20",
    secondary:
      "bg-accent-500 text-white hover:bg-accent-400 focus:ring-accent-400 shadow-lg hover:shadow-xl shadow-accent-500/20",
    outline:
      "border-2 border-primary-400 text-primary-400 hover:bg-primary-950/50 focus:ring-primary-400",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

