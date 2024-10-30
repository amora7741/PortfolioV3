"use client";

import { useEffect, useRef } from "react";

import { useState } from "react";

const MouseCursor = ({ position }: { position: { x: number; y: number } }) => (
  <div
    className="mouse-cursor pointer-events-none fixed -z-50 size-[50rem] rounded-full"
    style={{
      left: position.x,
      top: position.y,
      transform: "translate(-50%, -50%)",
      background:
        "radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, rgba(59, 130, 246, 0) 70%)",
    }}
  />
);

const MouseHoverWrapper = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
      return () => {
        container.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden" ref={containerRef}>
      <MouseCursor position={position} />
      {children}
    </div>
  );
};

export default MouseHoverWrapper;
