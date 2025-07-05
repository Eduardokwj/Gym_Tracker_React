import React from "react";
import "./styles.css";

export default function FeedbackAlert({ message, type }) {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}
