import { useEffect, useState } from 'react';
import Header from './components/1-header/header';
import Presentation from './components/2-presentation/present';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/6-footer/Footer';
import Services from './components/5-services/service';
import  Skills  from './components/Skills/skill';
function App() {
 useEffect(()=>{
  if(window.scroll>300){
    setshowCirecle(true)
  }
 },[]);
 
 const [showCirecle,setshowCirecle] = useState(false);
  return (
    <div id="up" className='container'>
     <Header/> 
     <div className='divider'/>
    <Presentation/>
    <div className='divider'/>
    <Services/>
    <div className='divider'/>
    <Main/>
    <div className='divider'/>
    <Skills/>
    <div className='divider'/>
    <Contact/>
    <div className='divider'/>
    <Footer/>
    <button style={{opacity:showCirecle? 1 : 0,transition:"1s" ,}} className='scroll2top'>mybutton</button>
        
    </div>

  )
}

export default App
