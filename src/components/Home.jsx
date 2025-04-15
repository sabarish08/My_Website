import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='w-full flex flex-col items-center gap-6 p-8 text-center'>
  
  <h1 class="heading-1 mb-4 max-w-[70rem] px-4 text-center text-6xl font-bold tracking-tight lg:text-8xl" >
  Hi, I'm Sabarish Ganesan 👋  
</h1>
  <h2 className='text-3xl font-semibold'>
    Lead Software Engineer | .NET | AWS | PLC & HMI Programming | IoT Enthusiast 😎
  </h2>

  <h3 className='text-2xl font-medium'>
    I build scalable backend systems, automate industrial processes, and bridge the gap between software and hardware.
  </h3>

  <h4 className='text-xl font-normal'>
    Let’s bring your tech ideas to life — whether it’s a cloud-native app, a smart factory system, or the next big IoT innovation.
  </h4>

  <div className="mt-4 flex gap-4">
    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
      🚀 Get Started
    </button>
    <button className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded-full">
      📖 More About Me
    </button>
  </div>
</div>
    </div>
  )
}

export default Home
