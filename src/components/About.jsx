import React from 'react'
import Profile_pic from "../assets/sabarish.jpg"

const About = () => {
  return (
    <div className='flex gap-2'>
        <div className='w-full flex flex-col items-center gap-6 p-8 text-center'>
  
            <p1 class="heading-1 mb-4 max-w-[70rem] px-4 text-center text-6xl font-light tracking-tight lg:text-8xl" >
                Hey there! 👋  
                

                
                </p1>
            
                <p2 className='text-xl font-normal'>
                I’m Sabarish Ganesan, an Automation Engineer with hands-on experience in electrical and control systems, industrial automation, and a wide range of equipment and technologies across various sectors.
                </p2>

                <p3 className='text-xl font-normal'>
                I specialize in PLC programming, HMI & SCADA design, instrumentation, motion control systems, and IoT applications. I’ve also 
                </p3>


                <p4 className='text-xl font-normal'>
                Lately, I’ve been diving deeper into the evolving space of smart industrial systems and how IoT can reshape traditional control architecture. I'm passionate about building reliable, efficient automation systems and sharing my learnings with peers and budding engineers.
                </p4>

                <p5 className='text-xl font-normal'>This space is where I’ll be sharing my experiences, tips, and lessons from the field — whether it’s troubleshooting a tricky PLC loop or optimizing a SCADA dashboard for better UX. Stay tuned, and feel free to connect if you're working on something exciting in the world of automation!
                
                </p5>
                </div>
                <div className='flex items-center'>
                    <img className='w-[90%]' src={Profile_pic} alt="" />
                </div>

    
  
</div>
    
  )
}

export default About
