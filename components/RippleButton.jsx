"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RippleButton = ({ title, variant = "solid", to }) => {
  const router = useRouter();

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };

  const handleClick = () => {
   if (to) {
      router.push(to);
    }
  };

  return (
    <button
      className={`button ${variant}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default RippleButton;