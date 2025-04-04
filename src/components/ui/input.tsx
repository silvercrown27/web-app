import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({icon, className, ...props }) => {
    return (
        <fieldset className="flex flex-row items-center">
            {icon && <span className="absolute left-0 text-gray-600">{icon}</span>}
            <input className="w-full h-full border-none outline-none rounded-2xl pl-12 bg-white" {...props} />
        </fieldset>
    );
}

export default Input;