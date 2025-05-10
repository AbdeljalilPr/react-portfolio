import React, { useState } from 'react'
import './main.css'
import { allpr } from '../../constant';
/* eslint-disable no-constant-condition */

function Main() {
 const [currrentButton,setcurrrentButton]=useState('all');
 const [allproject,setarrayProject]=useState(allpr);
const handelFiltration=(projectcategorie) => {
    setcurrrentButton(projectcategorie);
    const filtredarray=allpr.filter((params) => {
        const lastfiltred=params.categorie.find((item)=>{
          return item ===projectcategorie
        });
       return lastfiltred===projectcategorie;     
      });
      setarrayProject(filtredarray);
}

             
  return (
    
    <main id='Main' className='flex' >
      <section className='flex left-section'>
      <h1 className="title">
            My <span>Projects</span>
        </h1>
        <p className='Project-descreption'>
        These are some of the projects I have worked on in web and mobile application development.
        </p>
            
      {/* first button all project */}
    <button onClick={()=>{handelFiltration('all')}}
     className={currrentButton==='all' ? 'active' : null }>All Projects</button>
    {/* second button react project */}
    <button onClick={()=>{handelFiltration('react')}} className={currrentButton==='react' ? 'active' : null }>React Projects</button>
     {/* third button Fullstack project */}
    <button onClick={()=>{handelFiltration('Full')}} className={currrentButton==='Full' ? 'active' : null }>Fullstack Projects</button>
     {/* fourth button Mobile app project */}
    <button onClick={()=>{handelFiltration('mobile')}} className={currrentButton==='mobile' ? 'active' : null }>Flutter App</button>
     {/* fourth button Mobile app project */}
    <button onClick={()=>{handelFiltration('js')}} className={currrentButton==='js' ? 'active' : null }>Game Development</button>
   
      </section>
      {/* the right section */}
      <section  className='right-section flex border '>
     
         {allproject.map((project,index)=>{
        return(
       <article key={index} className='card'>
       <img width={258} height={145} src={project.img} alt="czc" srcset="" />
       <div className="project-details" >
           <h1 className="project-title">{project.project}
           </h1>
           <p className="project-descreption">{project.descreption}</p>
           <div className="icons flex ">
               <div className='flex icons' style={{gap:'11px'}}>
                   <div className="icon-link"><a href="http://"><i class='bx bxl-github' ></i></a></div>
                   <div className="icon-github"></div>
               </div>
               <a className='link flex' href="http://">View more
               <span className="icon-arrow-right" style={{alignSelf:"end"}}></span>
               </a>
           </div>
       </div>
      </article>
         )}
         )
         }
        
        
 
      </section>
    </main>
  )
}

export default Main
