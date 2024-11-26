import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const SideProjects = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        const t1=gsap.timeline( {scrollTrigger:{
            trigger:".project",
            start:"top",
            pin:true,
            scrub:2
            
            
        }})
        t1.from(".project .heading",{
            x:2000,
            
            duration:0.2,
            
           

        })
        t1.from(".project .card",{
            y:20,
            opacity:0,
            duration:0.5,
            stagger:1.2
            
            
          

        })
       
    })
  return (
    <div className='project w-full h-full bg-black p-4 flex flex-col justify-center items-center gap-8 max-lg:h-full overflow-hidden'>
        <h2 className='heading text-white text-8xl text-center'>Projects</h2>
       <div className=" flex flex-wrap  justify-center gap-6">
       {
            projects.map((item,index)=><div className="card w-1/4 max-lg:w-1/3 max-md:w-1/2 max-sm:w-full" key={index}>
                <ProjectCard title={item.title} description={item.description} weblink={item.weblink} gitlink={item.gitlink}/>
            </div>
            )
        }
       </div>
    </div>
  )
}

export default SideProjects