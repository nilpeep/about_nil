import React from 'react'

const About = ({parallax}:any) => {
  return (
    <div className="text-black bg-white p-5 text-sm rounded-lg w-[400px] h-[400px] mt-[200px]">
          <h1>Hi Its nilufer!</h1>
          <p className="text-xl">
            Passionate and skilled Full-stack Developer.
            With over a year of dynamic experience in full-stack web development, I specialize in building high-quality web applications that are both visually appealing and highly functional. 
          </p>
          <div onClick={() => parallax.current.scrollTo(2)} className='cursor-pointer text-xl bg-[#A533FF] p-2 text-white font-medium rounded-lg'>
          Learn More
          </div>

          </div>
  )
}

export default About