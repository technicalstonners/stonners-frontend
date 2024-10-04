import React from "react";
import "../styles/button.css";
import Image from "next/image";

function StButton(props) {
  const { variant, onClick, style, name, icon, className } = props;
  
  return (
    <button
      className={`stButton ${className} ${variant === "orange" && "stButton-orange"}`}
      onClick={onClick}
      style={style}
    >
      {name}
      {icon && <Image src={icon} height={24} width={24} alt={icon} />}
    </button>
  );
}

export default StButton;
