import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, className, ...props }) => {
  return (
    <fieldset className="relative flex items-center border-[1.5px] border-gray-300 rounded-xl h-[50px] transition duration-200 focus-within:border-blue-600">
      {icon && <span className="absolute left-4 text-gray-500">{icon}</span>}
      <input
        className={`w-full h-full border-none outline-none rounded-xl pl-12 pr-4 bg-white placeholder-gray-400 autofill:shadow-[inset_0_0_0px_1000px_white] ${className}`}
        {...props}
      />
    </fieldset>
  );
};

export default Input;
