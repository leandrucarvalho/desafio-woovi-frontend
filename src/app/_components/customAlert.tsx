import React from "react";

interface CustomAlertProps {
  cashback?: string;
  text: string;
  emoji?: string;
  className?: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ emoji, cashback, text }) => {
  return (
    <div className={`tag text-base`}>
      {emoji}
      <span className="font-extrabold whitespace-nowrap">{cashback} </span>
      <span className="whitespace-nowrap pr-12">{text}</span>
    </div>
  );
};

export default CustomAlert;
