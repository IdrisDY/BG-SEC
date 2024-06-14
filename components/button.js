import React from "react";

const Button = ({
  text = "",
  variant = "black",
  size = "small",
  type = "button",
  customClassName = "",
  disabled = false,
  onClick,
  id = "",
}) => {
  const baseClassName = "py-[10px] px-[18px]  rounded-[4px] ";
  const buttonWidth = size === "small" ? "w-fit" : "w-full";
  const buttonVariant = `bg-${variant}`;
  // const buttonTextColor = variant === "black" ? "text-white" : "text-font_black";
  const isDisabledStyle = disabled ? "bg-gray-400 text-white" : "";

  const className = `${baseClassName} ${buttonWidth} ${buttonVariant}  ${isDisabledStyle}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      className={`${className} ${customClassName}`}
    >
      {text}
    </button>
  );
};

export default Button;
