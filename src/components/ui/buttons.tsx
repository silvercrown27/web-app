import { Loader2 } from "lucide-react";
import cn from "../../utils/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary";
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
        "w-full flex items-center justify-center rounded-4xl text-white font-medium transition-all py-4",
        variant === "default" && "bg-blue-600 hover:bg-blue-800",
        variant === "primary" && "bg-gradient-to-b from-[#BFBFFF] to-[#1F1FFF]"
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Loader2 className="animate-spin"/> : children}
    </button>
  );
};

export default Button;
