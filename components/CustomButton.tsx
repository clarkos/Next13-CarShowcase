"use client";

import Image from "next/image";
import { CustomButtonPros } from "@/types";
function CustomButton({
  title,
  btnType,
  containStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled
}: CustomButtonPros) {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="rigth Icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
