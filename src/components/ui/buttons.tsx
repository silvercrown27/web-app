import React from "react";
import { cn } from "../../utils/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gradient";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  loading = false,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "h-[50px] w-full flex items-center justify-center rounded-xl text-white font-medium transition-all",
        variant === "default" && "bg-blue-600 hover:bg-blue-700",
        variant === "gradient" && "bg-gradient-to-b from-[#FF946D] to-[#FF7D68]",
        loading && "opacity-70 cursor-not-allowed",
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Loader2 className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
