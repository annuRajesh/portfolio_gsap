import React, { useEffect } from "react";
import gsap from "gsap";

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Fade in animation for preloader
    tl.to(".preloader", {
      opacity: 1,
      duration: 1,
    });
// Fade out animation when content is ready
    setTimeout(() => {
      tl.to(".preloader", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // Optionally, you can set up any action once the preloader finishes, like changing the state.
        },
      });
    }, 5000); 

    tl.play();
  }, []);

  return (
    <div className="preloader fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center opacity-0">
      <div className="spinner w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin text-white">Loading.......</div>
    </div>
  );
};

export default Preloader;