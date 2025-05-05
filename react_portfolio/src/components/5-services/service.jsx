import React from 'react';
import './service.css'
const myservices=[{num:'01',title:'Web Development',descreption:'I have good knowledge on how to produce a web application, whether server side or client side.',icon1:'bx bx-laptop',icon2:'bx bx-arrow-back'},
  {num:'02',title:'Mobile Development',descreption:'Good knowledge of "Flutter" framework and its state management.',icon1:'bx bxs-mobile',icon2:'bx bx-arrow-back'},
    {num:'03',title:'Maching Learning',descreption:'During tow years of master degree we were exposed to a various concepts and algorithms of ML.',icon1:'bx bx-brain',icon2:'bx bx-arrow-back'},
    {num:'04',title:'Web Scrap',descreption:'I worked in web scrap with a company as a freelancer and carried out some tasks for them.',icon1:'bx bxl-kubernetes',icon2:'bx bx-arrow-back'},
    {num:'05',title:'Image Processing',descreption:'During university, we were exposed to digital image processing and completed important projects.',icon1:'bx bx-chip',icon2:'bx bx-arrow-back'},
    {num:'06',title:'UI/UX Design',descreption:'I have extensive experience with design languages ​​such as HTML, CSS, Bootstrap, and JQuery.',icon1:'bx bxs-color',icon2:'bx bx-arrow-back'}];
function Services() {
   // const [myservices,setmyservices]=useState(myservices);
  return (
    <section id='Services' className='services '>
        <h1 className="title">My <span>Services</span></h1>
        <p className='services-desc border'>
        These are some of the technical fields I worked in, whether during university or after graduation
        through freelance work or graduation projects.   
      </p>
      <div className='services-container '>    
         { myservices.map((service,index)=>{
        return(
       <div key={index} className='service-card'>
        <div class='icon'>
          <i class={service.icon1}></i>
          <a href='#'><i class={service.icon2}></i></a>
        </div>
       {/* <h3>{service.num}</h3> */}
       <h3>{service.title}</h3>
       <p>{service.descreption}</p>

      </div>
         )}
         )
         }
      </div>
    </section>
  )
}

export default Services
