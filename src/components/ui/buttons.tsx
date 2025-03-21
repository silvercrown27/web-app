const Button = ({
  text,
  filled,
  color,
}: {
  text: string;
  filled: boolean;
  color: string;
}) => {
  const filledClasses = filled
    ? `bg-${color}-500 text-white`
    : `border border-${color}-500 text-${color}-500`;
  const hoverClasses = filled
    ? `hover:bg-${color}-600 hover:shadow-lg transform hover:scale-105`
    : `hover:bg-${color}-100 hover:shadow-md transform hover:scale-105`;

  return (
    <button
      className={`px-4 py-2 rounded-full transition-all duration-300 ${filledClasses} ${hoverClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
