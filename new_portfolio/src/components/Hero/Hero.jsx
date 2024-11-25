import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.to('.hero .heading',{
            x:'-2300px',
            duration:4,
            
            scrollTrigger:{
                trigger:'.hero',
                start:'top',
                scrub:2,
                pin:true

            }
        })
    })
  return (
    <div className='hero flex  items-center px-8 w-full h-screen overflow-hidden  bg-black max-md:hidden'>
        <h1 className='heading text-[350px] max-lg:text-[225px] max-md:text-[90p] whitespace-nowrap text-white '>Welcome to my portfolio</h1>
    </div>
  )
}

export default Hero