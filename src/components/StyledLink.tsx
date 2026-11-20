import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

type StyledLinkProps = Omit<ComponentProps<"a">, "className" | "href"> & {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

const variantMap = {
  primary: "default",
  secondary: "outline",
} as const;

function StyledLink({
  href,
  className,
  variant = "primary",
  ...props
}: StyledLinkProps) {
  const linkClassName = cn(
    buttonVariants({ variant: variantMap[variant], size: "lg" }),
    "min-h-12 rounded-xl px-5 py-3 font-semibold transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]",
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-500"
      : "border-gray-700 bg-gray-900 text-white hover:border-gray-500 hover:bg-gray-800",
    className,
  );

  if (href.startsWith("#")) {
    return <a href={href} className={linkClassName} {...props} />;
  }

  return <Link href={href} className={linkClassName} {...props} />;
}

export default StyledLink;
