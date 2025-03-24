const Button = ({
  text,
  filled,
  color,
}: {
  text: string;
  filled: boolean;
  color: string;
}) => {
    const filledClasses = filled ?
     `bg-${color}-300` :
     `bg-${color}`;

     const hoverClasses = `hover:bg-${color}-700 hover:shadow-lg transform hover:scale-105`;
    
  return <button className={`px-4 py-2 mx-2 tranition-all rounded-full border border-solid ${filledClasses} ${hoverClasses}`}>{text}</button>;
};

export default Button;
