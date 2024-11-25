import { useAnimation, useInView,motion } from "framer-motion"
import { useEffect, useRef } from "react"

const Contact=()=>{
    const variants={
        initial:{opacity:0,y:30},
        visible:{opacity:1,y:0}
      }
      const ref=useRef()
        const isView=useInView(ref,{once:true})
        const controls=useAnimation()
        useEffect(()=>{
          if(isView){
            controls.start('visible')
          }
        })
    return(
        <motion.div ref={ref} variants={variants} initial='initial' animate={controls} className="p-7 bg-gray-300 flex flex-col gap-6">
            <h3 className="text-4xl">Contact Me</h3>
            <p className="text-sm ">The fastest way to get in touch with me is to send a message on <a href="https://www.linkedin.com/in/annu-rajesh-a82a66221/" target="blank" className="font-semibold underline hover:text-gray-700">Linkedln</a> or <a href="mailto:joannetsengannu@gmail.com" target="" className="font-semibold underline hover:text-gray-700">mail me</a>.</p>
        </motion.div>
    )
}
export default Contact