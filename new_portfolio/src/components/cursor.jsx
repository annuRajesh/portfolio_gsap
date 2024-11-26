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

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest(".box .skills")) {
        cursorRef.current.style.backgroundColor = "transparent";


      } else {
        cursorRef.current.style.backgroundColor = "white"; 
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor fixed w-20 h-20 bg-transparent  rounded-full pointer-events-none z-50 mix-blend-difference"
    ></div>
  );
};

export default Cursor;
