import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] flex space-around w-[100%]'>
      <section>Logo</section>
      <div className='flex'>
        <ul className='flex'>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar