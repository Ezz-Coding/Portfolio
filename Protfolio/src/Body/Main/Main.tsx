import './Main.css'
import Me from './../../../../Tools/image me.jpg'
import React from './../../../../Tools/React.png';
import MongoDB from './../../../../Tools/MongoDB.png';
import Next from './../../../../Tools/Next.js.png';
import Vite from './../../../../Tools/Vite.js.png';
import MySQL from './../../../../Tools/MySQL.png';
import TypeScript from './../../../../Tools/TypeScript.png';
import JavaScript from './../../../../Tools/JavaScript.png';
import Node from './../../../../Tools/Node.js.png';
import Express from './../../../../Tools/Express.png';
import Netlfiy from './../../../../Tools/Netlify_Symbol_2.webp';
import Project1 from './../../../../Tools/Project1.png'
import {  useContext, useEffect, useState } from 'react'
import { ContextAll } from '../../Context/ContextProvider';




const Main = () => {
    const [click,setclick] = useState<boolean>(false);
 
  const [Infomations ,setInformations] = useState<string>("All");
   const context = useContext(ContextAll);
  if (!context) return null;
  const {setTop,setAboutMe,setSkills,AboutMe,Skills,Winners}= context;

useEffect(() => {
  document.body.style.overflow = click ? 'hidden' : 'auto';
  document.body.style.backgroundColor = Winners ?  '#101924'  : 'lightgray';
  document.body.style.transition = '0.5s ease';
    const handleScroll = () => {
      const scrollY: number = window.scrollY;
     

      
        if (scrollY > 0) {
          setAboutMe(true)
          setTop(true)
        } else {
         setAboutMe(false)
          setTop(false)

        }
        if (scrollY > 1400) {
          setSkills(true)
        }
        else{
          setSkills(false)
        }
     
      
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [click,Winners]);
  
 
  return (
    <>
    {/* About Me */}
    {click?<div className="BlackScreen" >
        <i className="ri-close-line"onClick={()=>setclick(!click)}></i>
    </div>:null}
   <div className="Main_About">
       {AboutMe?<> <span className={Winners?'AboutMeDark':'AboutMeLight'}> <h1>About Me</h1></span>

        <div className="Main_Information_ME">
            <div className="ImageAndName">
                <img src={Me} alt="Not Found This Image" loading='lazy' decoding='async' />
                <br />
                <br />
                <br />
                <h1 className={Winners?'h1sNamedark':'h1sNamelight'}>Ezz Rushdi Abu Rmailh</h1>

            </div>
            <div className={click?Winners?"FocuasInformationDark":"FocuasInformation":Winners?"InformationAboutMeDark" :"InformationAboutMe"} onClick={()=>setclick(true)}>
    {click? <label className={Winners?'AboutDark':'Aboutlight'}><span><h1>About Me</h1></span></label>:null}  

        <p className={Winners?'AboutpDark':'Aboutplight'}>I’m a passionate and results-driven <span>Full-Stack</span> Developer with a strong foundation in both <span> front-end </span>and <span>back-end </span>technologies. With a focus on clean code, scalable architecture, and user-centered design, I specialize in building responsive web applications using modern tools like <span>React</span>, <span>TypeScript</span>, <span>Node.js</span>, and <span>Express</span>.

I’ve led and contributed to multiple successful projects, from concept to deployment, delivering solutions that are not only functional but also intuitive and visually engaging. I’m constantly<span> seeking to improve my skills</span>, stay updated with industry trends, and <span>build products that create real impact</span>.

Beyond coding, I <span>enjoy working</span> in collaborative environments, mentoring junior developers, and continuously exploring innovative <span>solutions to complex problems</span>.

</p>
            </div>
        </div>
        <div className="WordInfomations">
            <div className={Winners?"Word1Dark":"Word1"}>
             <h4 className={Winners?'h4sDark':'h4slight'}>Who I Am</h4>
             <p>
Creative and performance-driven full-stack developer with a deep focus on writing clean, maintainable code. I specialize in building responsive web interfaces and scalable backend systems that deliver real value.</p>
            </div>
            <div className={Winners?"Word2Dark":"Word2"}>
       <h4 className={Winners?'h4sDark':'h4slight'}>What I Do</h4>
       <p>
I design and develop modern web applications using React, TypeScript, Node.js, and MongoDB. I turn ideas into interactive digital solutions—optimized for speed, usability, and long-term growth.

</p>
            </div>
        </div></>:null}
    </div>
    {/* My Skills*/}
    <div className={Winners?"Main_SkillsDarks":"Main_Skills"}>
  <span><h1>My Skills</h1></span>
{  Skills?<><div className="Main_InformationSkills">
    <div className="Button_Skills">
      <button className={Infomations === "All"? 'buttonClick' :Winners?'buttonDark':'button'}  onClick={()=>setInformations("All")}>All</button>
      <button className={Infomations === "Frontend"? 'buttonClick' :Winners?'buttonDark':'button'}  onClick={()=>setInformations("Frontend")}>Frontend</button>
      <button className={Infomations === "Backend"? 'buttonClick' :Winners?'buttonDark':'button'}  onClick={()=>setInformations("Backend")}>Backend</button>
      <button className={Infomations === "UsingTools"? 'buttonClick' :Winners?'buttonDark': 'button'}  onClick={()=>setInformations("UsingTools")}>Using Tools</button>
    </div>
    <div className="SubSkills">
    { Infomations === "All"? <>
    <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={React} alt="not found this image" loading='lazy'/>
      <a href="http://react.dev/learn"> <p>React.js <i className="ri-arrow-right-up-fill"></i></p></a> 
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Vite} alt="not found this image" loading='lazy'/>
      <a href="https://vite.dev/guide/"> <p>Vite <i className="ri-arrow-right-up-fill"></i></p></a> 
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Next} alt="not found this image" loading='lazy'/>
      <a href="https://nextjs.org/docs"> <p>Next.js <i className="ri-arrow-right-up-fill"></i></p></a> 
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={JavaScript} alt="not found this image" loading='lazy'/>
      <a href="https://262.ecma-international.org/"> <p>JavaScript <i className="ri-arrow-right-up-fill"></i></p></a> 

      </div>
      
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Node} alt="not found this image" loading='lazy'/>
      <a href="https://devdocs.io/node/"> <p>Node.js <i className="ri-arrow-right-up-fill"></i></p></a> 

      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Express} alt="not found this image" loading='lazy'/>
      <a href="https://expressjs.com/en/starter/installing.html"> <p>Express.js <i className="ri-arrow-right-up-fill"></i></p></a> 

      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={MongoDB} alt="not found this image" loading='lazy' />
      <a href="https://www.mongodb.com/docs/"> <p>MongoDB <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
      <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={MySQL} alt="not found this image" loading='lazy' />
      <a href="https://dev.mysql.com/doc/"> <p>MySQL <i className="ri-arrow-right-up-fill"></i></p></a> 

        
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={TypeScript} alt="not found this image"  loading='lazy' />
      <a href="https://www.typescriptlang.org/docs/"> <p>Typescript <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
      <div  className={Winners?"SkillsDark":"Skills"}>
<svg style={{marginTop:'30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-label="Render" width="25" height="25" className ="render-logo-fill"><path d="M26.827.01c-4.596-.216-8.461 3.107-9.12 7.487-.027.203-.066.4-.099.596-1.025 5.454-5.797 9.584-11.53 9.584a11.67 11.67 0 0 1-5.634-1.442.298.298 0 0 0-.444.262v18.854h17.602V22.097c0-2.439 1.971-4.419 4.4-4.419h4.4c4.982 0 8.99-4.15 8.795-9.197C35.02 3.937 31.35.226 26.827.01Z"></path></svg>
      <a href="https://render.com/docs"> <p>Render <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Netlfiy} alt="not found this image" loading='lazy' />

  <a href="https://docs.netlify.com/"> <p>Netlify <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
      </>
      :Infomations === "Frontend"? <>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={React} alt="not found this image" loading='lazy'/>
      <a href="http://react.dev/learn"> <p>React.js <i className="ri-arrow-right-up-fill"></i></p></a> 
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Vite} alt="not found this image" loading='lazy'/>
      <a href="https://vite.dev/guide/"> <p>Vite <i className="ri-arrow-right-up-fill"></i></p></a> 
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Next} alt="not found this image" loading='lazy'/>
      <a href="https://nextjs.org/docs"> <p>Next.js <i className="ri-arrow-right-up-fill"></i></p></a> 
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={JavaScript} alt="not found this image" loading='lazy'/>
      <a href="https://262.ecma-international.org/"> <p>JavaScript <i className="ri-arrow-right-up-fill"></i></p></a> 

      </div>
          <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={TypeScript} alt="not found this image"  loading='lazy' />
      <a href="https://www.typescriptlang.org/docs/"> <p>Typescript <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
      </>:Infomations === "Backend"?
      <>
<div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Node} alt="not found this image" loading='lazy'/>
      <a href="https://devdocs.io/node/"> <p>Node.js <i className="ri-arrow-right-up-fill"></i></p></a> 

      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Express} alt="not found this image" loading='lazy'/>
      <a href="https://expressjs.com/en/starter/installing.html"> <p>Express.js <i className="ri-arrow-right-up-fill"></i></p></a> 

      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={MongoDB} alt="not found this image" loading='lazy' />
      <a href="https://www.mongodb.com/docs/"> <p>MongoDB <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
      <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={MySQL} alt="not found this image" loading='lazy' />
      <a href="https://dev.mysql.com/doc/"> <p>MySQL <i className="ri-arrow-right-up-fill"></i></p></a> 

        
      </div>
      </>
      :Infomations === "UsingTools"?  <> <div  className={Winners?"SkillsDark":"Skills"}>
<svg style={{marginTop:'30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-label="Render" width="25" height="25" className ="render-logo-fill"><path d="M26.827.01c-4.596-.216-8.461 3.107-9.12 7.487-.027.203-.066.4-.099.596-1.025 5.454-5.797 9.584-11.53 9.584a11.67 11.67 0 0 1-5.634-1.442.298.298 0 0 0-.444.262v18.854h17.602V22.097c0-2.439 1.971-4.419 4.4-4.419h4.4c4.982 0 8.99-4.15 8.795-9.197C35.02 3.937 31.35.226 26.827.01Z"></path></svg>
      <a href="https://render.com/docs"> <p>Render <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
       <div  className={Winners?"SkillsDark":"Skills"}>
        <img src={Netlfiy} alt="not found this image" loading='lazy' />

  <a href="https://render.com/docs"> <p>Netlify <i className="ri-arrow-right-up-fill"></i></p></a> 

       
      </div>
     </> :null }
    </div>
  </div>
    {/* My Project*/}
<div className={Winners?"Main_ProjectDarks":"Main_Project"}>
    <h1>My Project</h1>

  <div className="grid_Project">
    <div className="Project">
      <div className="card">
  <div className="card-inner">
    <div className="card-front">
      <img src={Project1} alt="Project1" />
    </div>
    <div className={Winners?"card-backDark":"card-back"}>
      
      <a href="https://portfolio-dt-nine.vercel.app/">Click here</a>
    </div>
  </div>
</div>

    </div>

  </div>
</div>
    {/* My Content*/}
  <div className="MainContent">
    <><b><span className={Winners?'ContactDark': 'ContactLight'}> <h2>My contact</h2></span></b>

  <div className="Main_informtationContent">
    <div className={Winners?"BlankDark":"BlankLight"}>
      <h1><i className="ri-phone-fill"></i> Phone :<a href="tel:+962798078447">+962 79 807 8447</a></h1>
      <div className="Line"></div>
      <h1><i className="ri-github-fill"></i>  GitHup:<a href="https://github.com/Ezz-Coding">Ezz-Coding</a></h1>
      <div className="Line"></div>
      <h1><i className="ri-instagram-fill"></i>  Instagram:<a href="https://www.instagram.com/ezzaburmailh/">Ezz Aldeen Abu Rmaileh</a></h1>
      <div className="Line"></div>
      <h1><i className="ri-mail-fill"></i>  Gmail:<a href="mailto:ezzrushdi1@gmail.com">ezzrushdi1@gmail.com</a>
</h1>


    </div>
    </div></> 
  </div>

    </>:null}

</div>
 </>) }


export default Main
