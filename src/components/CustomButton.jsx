import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <img src={rightIcon} alt="right icon" className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
