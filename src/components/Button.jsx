import React from "react";

const Button = ({ text, height, width }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: `${width}rem`,
        height: `${height}rem`,
        borderRadius: "10px",
        fontSize: "1 rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 20px 35px 0px #00000026",
      }}
    >
      {text}
    </div>
  );
};

export default Button;
