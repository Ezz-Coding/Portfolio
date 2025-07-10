import './Tools.css'
import Video1 from './../../../Tools/Vidoe1.mp4';
import Video2 from './../../../Tools/Vidoe2.mp4';
import { useContext } from 'react';
import { ContextAll } from '../Context/ContextProvider';


const Tools = () => {
   const context = useContext(ContextAll);
   if (!context) {
    return null
   }
   const {Top,Winners} = context;
    
  return (
   <>
  {Winners?<video  className='Vidoe1' src={Video2} autoPlay  autoFocus muted   preload='auto'      ></video>:<video className='Vidoe1' src={Video1} autoPlay  autoFocus muted   preload='auto'      ></video>} 
  <div className="GetInformtion">
    <h1>Ezz Abu Rmailh</h1>
    <br />
  <p className="typing-textFS">Full-Stack </p>
  <span><p className={Winners?'typing-textSEDark':'typing-textSE'}>Software Engineer</p></span>

<div className={Winners?'light':'Dark'}>
 <i className="ri-arrow-down-double-fill" onClick={()=>window.scrollTo({top: window.innerHeight * 1.1, behavior: 'smooth'})}></i>
</div>

 </div>
 {Top?<div className={Winners?"TopsDark":"Tops"}><button onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}><i className="ri-arrow-up-fill"></i> </button>
</div>:null}

   </> 
  )
}

export default Tools
