import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function CustomButton({ children, to, onClick, type = "button" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className="custom-button" type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
