import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React from 'react'


const Introduction = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.box',
                start: 'top',
                scrub: 2,
                pin: true,
            },
        });

        timeline
            .from('.box .intro', {
                y: 20,
                opacity: 0,
                duration: 3,
            })
            .from('.box .photo', {
                x: -20,
                opacity: 0,
                duration: 2,
            }, ); 
    });
   
  return (
    <div className='box flex w-full max-lg:flex-col h-screen max-lg:h-full p-4'>
       <div className="intro w-1/2 max-lg:w-full flex justify-start items-center flex-col px-4 py-8 gap-8">
       <h2 className='text-7xl font-thin max-md:text-4xl'>Hey there, I'm <br></br><span className='font-normal text-8xl max-md:text-5xl whitespace-nowrap'> Annu Rajesh</span></h2>
       <div className="flex flex-col gap-4 justify-center items-center text-justify p-6">
        <p> I'm a versatile creative professional who thrives at the intersection of web development, music, and adventure. This is the space where my love for coding, passion for singing, and zest for an active life come together to create a unique fusion of talents.</p>
        <p>As a web developer, I'm dedicated to crafting digital solutions that go beyond the surface and dive deep into the intricacies of the web. I believe that the digital realm is a canvas for innovation, and I'm committed to creating websites and web applications that not only look great but also function flawlessly.</p>
        <p>Music has always been my solace, my sanctuary of expression. As a passionate singer, I channel emotions, stories, and dreams through the power of song. When I'm not immersed in lines of code or out exploring the world, you'll often find me on stage, pouring my heart into soulful melodies and exhilarating performances.</p>
        <p> Thank you for exploring my portfolio. If you have a development project in mind, want to collaborate on music, or simply wish to discuss web development and adventures, I'm just a message away.</p>
       </div>
       </div>
       <div className="photo flex justify-center items-center w-1/2 max-lg:w-full p-3 m-5 ">
       <img src="" alt="profile photo object-cover " />
            </div>
    </div>
  )
}

export default Introduction