import React, { useEffect } from 'react'
import './header.css'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Header() {
  const [Theme,setTheme]=useState(localStorage.getItem('currentMode') ?? 'dark');
  useEffect(()=>{
    if(Theme==='dark'){
      document.body.classList.remove('light')
       document.body.classList.add('dark');
    }else{
       
      document.body.classList.remove('dark')
      document.body.classList.add('light');
    }
  },[Theme])
  return (
   
    <header className='flex'>
    <button className='icon-menu'><i class='bx bx-menu-alt-left' ></i></button>
      <div/>
    <nav>
      <ul className='links flex'>
        <li><AnchorLink className='anchor-link' offset={50} href='#Presentation'><a href="#">About</a></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Services'><a href="">Services</a></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Main'><a href="">Projects</a></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Skills'><a href="">Skills</a></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><a href="">Contact</a></AnchorLink></li>
      </ul>
    </nav>
    <button onClick={()=>{
      //set value to localstorage 
      localStorage.setItem("currentMode",Theme==="light"? "dark":"light");
      //get value from local storage
      setTheme(localStorage.getItem("currentMode"));
    }} className='mode flex'>
      {Theme==="dark" ? (<i class='bx bx-sun' ></i>) : (<span className='icon-moon-o'></span>) }
      
    </button>
            <div className='fixed'>
            <ul className='modal'>
              <li>
                <button className='icon-circle-with-cross'/>
              </li>
              <li><a href=""></a>About Me</li>
              <li><a href=""></a>Services</li>
              <li><a href=""></a>Projects</li>
              <li><a href=""></a>Skills</li>
              <li><a href=""></a>Contact</li>
            </ul>
       </div> 
    </header>


  )
}

export default Header
