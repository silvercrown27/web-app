import React from "react";
import { cn } from "../../utils/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label
      className={cn("text-black font-semibold text-sm", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
