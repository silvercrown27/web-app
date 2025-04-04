import React from "react";
import cn from "../../utils/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={cn(`text-bold text-xl text-gray-800 ${className}`)}
      {...props}
    >
      {children}
    </label>
  );
};
