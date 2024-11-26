import React from "react";
import {
  react,
  css,
  javascript,
  typescript,
  framer,
  tailwind,
  html,
} from "../../data/skills";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top",
        pin: true,
        scrub: 2,
      },
    });
    t1.from(".skills .heading", {
      x: 2000,
      duration: 1.5,

    
    }).from(".skills img", {
        y: 20,
        opacity: 0,
        stagger: 1.2,
        delay:0.3
    });
  });
  return (
    <div className="skills w-full h-screen flex flex-col justify-center items-center gap-16">
      <h2 className="heading text-6xl max-md:text-4xl max-md:text-center">What I Work With</h2>
      <div className="grid grid-cols-3 justify-center items-cente gap-10">
        <img src={html} alt="html logo" />
        <img src={css} alt="css logo" />
        <img src={javascript} alt="javascript logo" />
        <img src={typescript} alt="typescript logo" />
        <img src={react} alt="react logo" />
        <img src={tailwind} alt="tailwind css logo" />
        <img src={framer} alt="framer motion logo" />
      </div>
    </div>
  );
};

export default Skills;
