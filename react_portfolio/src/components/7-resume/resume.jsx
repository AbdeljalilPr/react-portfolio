import React, { useState } from 'react'
import './resume.css'
/* eslint-disable no-constant-condition */
const career=[{id:1, categorie:'all',project:'project 1'},{id:2, categorie:'all',project:'project 1'},
    {id:3, categorie:'react',project:'React project'},
    {id:4, categorie:'Full',project:'Fullstack project using node js'},
    {id:5, categorie:'mobile',project:'flutter chat using node js'}
]
function Resume() {
 const [currrentButton,setcurrrentButton]=useState('all');
 const [allcareer,setallcareer]=useState(career);
const handelFiltration=(projectcategorie) => {
    setcurrrentButton(projectcategorie);
    const filtredarray=allcareer.filter((params) => {
        return params.categorie===projectcategorie
      }
      );
      setallcareer(filtredarray);
}

             
  return (
    
    <main className='flex' >
      <section className='flex left-section'>
      {/* first button all project */}
    <button onClick={()=>{handelFiltration('all')}} className={currrentButton==='all' ? 'active' : null }>all</button>
    {/* second button react project */}
    <button onClick={()=>{handelFiltration('react')}} className={currrentButton==='react' ? 'active' : null }>reacts</button>
     {/* third button Fullstack project */}
    <button onClick={()=>{handelFiltration('Full')}} className={currrentButton=='Full' ? 'active' : null }>Fullstack Projects</button>
     {/* fourth button Mobile app project */}
    <button onClick={()=>{handelFiltration('mobile')}} className={currrentButton==='mobile' ? 'active' : null }>Mobile App</button>
      </section>
      {/* the right section */}
      <section className='right-section flex border'>
     
         { allcareer.map((project)=>{
        return(
       <article key={project.id} className='card border'>
       <img width={266} src="" alt="" srcset="" />
       <div className="project-details" >
           <h1 className="project-title">{project.project}
           </h1>
           <p className="project-descreption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis porro velit ipsum praesentium tenetur ipsa! Dignissimos fugit, earum, sapiente dolorum vero ut eaque excepturi dolores rerum exercitationem totam porro temporibus!</p>
           <div className="icons flex">
               <div className='flex' style={{gap:'11px'}}>
                   <div className="icon-link"></div>
                   <div className="icon-github"></div>
               </div>
               <a className='link flex' href="http://">more 
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

export default Resume
