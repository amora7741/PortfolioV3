"use client";

import { useEffect, useState } from "react";

const MouseCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="mouse-cursor pointer-events-none fixed -z-50 size-[60rem] rounded-full"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)",
      }}
    />
  );
};

export default MouseCursor;