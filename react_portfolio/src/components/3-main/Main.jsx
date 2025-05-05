import React, { useState } from 'react'
import './main.css'
/* eslint-disable no-constant-condition */
const allpr=[
  {id:3, categorie:['All','react'],project:'Prayer Time website using React',img:'../assets/images/prayer_app.jpeg'},
  {id:4, categorie:['All','react','Full'],project:'Fullstack Char app using Mern',img:'../assets/images/chat_app1.jpeg'},
  {id:5, categorie:['All','mobile'],project:'Payment app Using Flutter and Laravel',img:'../assets/images/chat_app.jpg'},
  {id:6, categorie:['All','mobile'],project:'Learning App for Special Needs Kids',img:'../assets/images/flutter_quiz_app.jpg'},
  {id:7, categorie:['All','mobile'],project:'Taksk Managment App using Flutter and GO',img:'../assets/images/flutter_task.jpeg'},
  {id:8, categorie:['All','react','Full'],project:'FullStack Twitter Clone App Using Mern',img:'../assets/images/twitter_clone.jpeg'},
  {id:9, categorie:['All','react','Full'],project:'FullStack Ecommerce App using Mern',img:'../assets/images/ecommerce.jpeg'},
  {id:10, categorie:['All','react','Full'],project:'FullStack Ecommerce App using Mern',img:'../assets/images/chat_app1.jpeg'},
  {id:11, categorie:['All','react'],project:'Todos App using React',img:'../assets/images/todos.jpg'},
  {id:12, categorie:['All','mobile'],project:'Book Car Maintenance App Base on ML',img:'../assets/images/car2.jpeg'},
  {id:13, categorie:['All','js'],project:'Snake Game using Js & Html & Css',img:'../assets/images/snake01.png'},
  {id:14, categorie:['All','js'],project:'Tic-Tac-Toe Game using Js & Html & Css ',img:'../assets/images/tic_tac.jpg'},
  {id:15, categorie:['All','js'],project:'Paper Collar Game using Js & Html & Css ',img:'../assets/images/paper.jpeg'},
  {id:16, categorie:['All','js'],project:'Memory Game App using Js & Html & Css ',img:'../assets/images/memory_game01.jpeg'},
  {id:17, categorie:['All','js'],project:'Quiz Game App using Js & Html & Css ',img:'../assets/images/quiz.png'},   
]
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
    <button onClick={()=>{setcurrrentButton('all')}}
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
      <section  className='right-section flex '>
     
         {allproject.map((project,index)=>{
        return(
       <article key={index} className='card'>
       <img width={258} height={150} src={project.img} alt="czc" srcset="" />
       <div className="project-details" >
           <h1 className="project-title">{project.project}
           </h1>
           <p className="project-descreption"> ipsa! Dignissimos fugit, earum, sapiente dolorum vero ut eaque excepturi dolores rerum exercitationem totam porro temporibus!</p>
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

export default Main
