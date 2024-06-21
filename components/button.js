import React from "react";

const Button = ({
  text = "",
  children,
  variant = "black",
  size = "small",
  type = "button",
  customClassName = "",
  disabled = false,
  base = false,
  onClick,
  id = "",
}) => {
  const baseClassName = "py-[10px] px-[18px]  rounded-[4px] ";
  const buttonWidth = size === "small" ? "w-fit" : "w-full";
  const buttonVariant = `bg-${variant}`;
  // const buttonTextColor = variant === "black" ? "text-white" : "text-font_black";
  const isDisabledStyle = disabled ? "bg-gray-400 text-white" : "";
  const baseColor = base ? "text-[#FAFFFF]" : "";
  const className = `${baseClassName} ${buttonWidth} ${buttonVariant} ${baseColor}  ${isDisabledStyle}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      className={`${className} ${customClassName}`}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
