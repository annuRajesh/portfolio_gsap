import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.x - cursorRef.current.clientWidth / 2,
        y: e.y - cursorRef.current.clientHeight / 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor fixed max-md:hidden w-20 h-20 rounded-full bg-white pointer-events-none z-50 mix-blend-difference border-2 border-gray-800 shadow-lg"
    ></div>
  );
};

export default Cursor;
