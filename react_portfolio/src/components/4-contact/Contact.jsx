import React from 'react'
import './contact.css'
import Lottie from 'lottie-react'
import doneAnimation from '../../../static/animation/done.json'
import emailAnimation from '../../../static/animation/email.json'
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
    const [state, handleSubmit] = useForm("xwpovnlj");
    
  return (
    <section id='Contact' className='contact-us'>
        <h1 className="title ">
            Contact <span>us</span> 
            <span className="email-icon"></span>
        </h1>
        <p className='subtitle '>
            Contact us for more information and if you want to collaborate .
        </p>
       <div style={{justifyContent:"space-between"}} className="contact-details">
        <form onSubmit={handleSubmit} action="">
        <div className='flex '>
            <label htmlFor='id'>Emial Aderess:</label>
            <input type="email"  name='email' id='email'/>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>
        <div style={{marginTop:"24px", width:'width: 112%;'}} className='flex' >
        <label htmlFor='id'>Your Message:</label>
        <textarea required name="message" id="message"></textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        </div>
        <button className='submit' type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ... " : "Submit"}
            </button>
        {state.succeeded && (<p className='flex' style={{fontSize:"18px",marginTop:"1.7rem"}}>
            <Lottie loop={false} style={{height:37 ,backgroundColor:"#fff"}}animationData={doneAnimation}/>           
            Your message has been sent successfully.</p>)}
        </form>
        <div className="contact-animation">
         <Lottie style={{height:355}} animationData={emailAnimation}/>           
   
        </div>
       </div>
    </section>
  )
}

export default Contact
