import React from 'react'
import Lottie from 'lottie-react'
import deveAnimation from '../../../static/animation/development.json'
import './present.css'
function Presentation() {
  return (
<section id='Presentation' className='hero flex'>
<div className='left-section '>
 
 <div className='parent-avatar flex'>
    <img src="" alt="" srcset="" />
    <div className='icon-verified'></div>
 </div>
 <div>
    <h1>Abdeljalil Ahmed</h1>
    <h2>
      <span data-text='Software '>Software </span>
      <span></span>
    <span data-text='Developer'> Developer</span>
    </h2>
    <p>Software developer with a master's degree in computer science, specializing in machine learning. I have a great passion for programming and various technologies, and I always aspire to develop and gain experience.</p>
 </div>
 <div class='btn-sci flex'>
 <a href="#" class='btn'>Download CV</a>
 <div class='sci'>
   <a href="" ><i class='bx bxl-github'></i></a>
   <a href="" ><i class='bx bxl-linkedin'></i></a>
 </div>
 </div>
 </div>

 <div className='right-section animation'>
  <Lottie animationData={deveAnimation}/>  
 </div>
</section>
  
  )
}

export default Presentation
