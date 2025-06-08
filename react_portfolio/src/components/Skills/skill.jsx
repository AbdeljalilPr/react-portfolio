import React from 'react'
import './skill.css'
/* eslint-no-irrugilar-white-spa */
function Skills() {
  return (
    <section id='Skills' className='skills-parent '> 
      <h1 className='title'>My <span> Skills</span></h1>
      <p className='skills-desc'>
       this is some of programming langauges and framworks that we have previously worked with in real projects .<span>we mentioned these langauges because they are the most popular langauges in web and mobile app development..</span>
         </p>
      <div className="skills-list flex">
        <div id="nond" className="skill-item">
            <i class='bx bxl-html5'></i> 
        <span>Html</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-javascript'></i> 
        <span>js</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-react'></i> 
        <span>react</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-python'></i> 
        <span>pytohn</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-c-plus-plus'></i> 
        <span>c++</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-nodejs'></i> 
        <span>node</span>
        </div>
        <div id="nond" className="skill-item">
        <i class='bx bxl-php'></i> 
        <span>php</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-java'></i> 
        <span>java</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-flutter'></i> 
        <span>Flutter</span>
        </div>
        <div id="nond" className="skill-item">
        <i class='bx bxl-go-lang'></i> 
        <span>Go-lang</span>
        </div>
        <div id="nond" className="skill-item">
        <i class='bx bxl-mongodb'></i> 
        <span>Mongodb</span>
        </div>
        <div className="skill-item">
        <i class='bx bxl-postgresql'></i> 
        <span>Postgresql</span>
        </div>
        <div id="nond" className="skill-item">
        <i class='bx bxl-git' ></i>
        <span>git</span>
        </div>
        
        <div id="nond" className="skill-item">
        <i class='bx bxl-github' ></i>
        <span>github</span>
        </div>
      </div>
    </section>
  )
}

export default Skills
