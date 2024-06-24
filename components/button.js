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
  const baseClassName =
    "py-[10px] px-[18px] rounded-[4px] transition duration-300 ease-in-out";
  const buttonWidth = size === "small" ? "w-fit" : "w-full";
  const buttonVariant =
    variant === "custom-yellow"
      ? `bg-btn_orange text-white hover:bg-hover-orange-dark`
      : "";
  const isDisabledStyle = disabled
    ? "bg-gray-400 text-white cursor-not-allowed"
    : "";
  const baseColor = base ? "text-[#FAFFFF]" : "";

  const className = `${baseClassName} ${buttonWidth} ${buttonVariant} ${baseColor} ${isDisabledStyle}  ${customClassName}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      className={className}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
