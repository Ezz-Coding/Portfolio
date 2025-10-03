import './Main.css'


import {  useContext, useEffect, useState } from 'react'
import { ContextAll } from '../../Context/ContextProvider';




const Main = () => {
 
  const [Infomations ,setInformations] = useState<string>("All");
   const context = useContext(ContextAll);
  if (!context) return null;
  const {Winners ,AboutRef,MySkillsRef,MyProject}= context;
const Socail_Media ={
  instagram:<><i className="ri-instagram-line"></i></>,
  Web:<><i className="ri-pages-line"></i></>,
}
const skills = [
  { name: "React.js", img: '/Image/React.png', link: "https://react.dev/learn", type: "frontend" },
  { name: "Vite", img: '/Image/Vite.js.png', link: "https://vite.dev/guide/", type: "frontend" },
  { name: "Next.js", img: '/Image/Next.js.png', link: "https://nextjs.org/docs", type: "frontend" },
  { name: "JavaScript", img: '/Image/JavaScript.png', link: "https://262.ecma-international.org/", type: "frontend" },
  { name: "TypeScript", img: '/Image/TypeScript.png', link: "https://www.typescriptlang.org/docs/", type: "UsingTools" },
  { name: "Node.js", img: '/Image/Node.js.png', link: "https://devdocs.io/node/", type: "backend" },
  { name: "Express.js", img: '/Image/Express.png', link: "https://expressjs.com/en/starter/installing.html", type: "UsingTools" },
  { name: "MongoDB", img: '/Image/MongoDB.png', link: "https://www.mongodb.com/docs/", type: "backend" },
  { name: "MySQL", img: '/Image/MySQL.png', link: "https://dev.mysql.com/doc/", type: "UsingTools" },
  { name: "Netlfiy", img: '/Image/Netlify_Symbol_2.webp', link: "https://docs.netlify.com/", type: "UsingTools" },
];

useEffect(() => {
  document.body.style.backgroundColor = Winners ?  '#101924'  : 'lightgray';
  document.body.style.transition = '0.5s ease';
 
  }, [Winners]);
  
 
  return (
    <>
    {/* About Me */}

   <div className="Main_About" ref={AboutRef}  data-aos='fade-up'>
       <span className={Winners?'AboutMeDark':'AboutMeLight'}  > <h1>About Me</h1></span>

        <div className="Main_Information_ME">
        
            <div className={Winners?"InformationAboutMeDark" :"InformationAboutMe"}  >
 

        <p className={Winners?'AboutpDark':'Aboutplight'}>I’m a passionate and results-driven <span>Full-Stack</span> Developer with a strong foundation in both <span> front-end </span>and <span>back-end </span>technologies. With a focus on clean code, scalable architecture, and user-centered design, I specialize in building responsive web applications using modern tools like <span>React</span>, <span>TypeScript</span>, <span>Node.js</span>, and <span>Express</span>. <br /> <br />

I’ve led and contributed to multiple successful projects, from concept to deployment, delivering solutions that are not only functional but also intuitive and visually engaging. I’m constantly<span> seeking to improve my skills</span>, stay updated with industry trends, and <span>build products that create real impact</span>.

Beyond coding, I <span>enjoy working</span> in collaborative environments, mentoring junior developers, and continuously exploring innovative <span>solutions to complex problems</span>.
<br />
<br />


</p>
            </div>
        </div>
        <div className="WordInfomations">
            <div className={Winners?"Word1Dark":"Word1"} data-aos='slide' >
             <h4 className={Winners?'h4sDark':'h4slight'}>Who I Am</h4>
             <p>
Creative and performance-driven full-stack developer with a deep focus on writing clean, maintainable code. I specialize in building responsive web interfaces and scalable backend systems that deliver real value.</p>
            </div>
            <div className={Winners?"Word2Dark":"Word2"} data-aos='slide'>
       <h4 className={Winners?'h4sDark':'h4slight'}>What I Do</h4>
       <p>
I design and develop modern web applications using React, TypeScript, Node.js, and MongoDB. I turn ideas into interactive digital solutions—optimized for speed, usability, and long-term growth.

</p>
            </div>
        </div>
    </div>
    {/* My Skills*/}
    <div className={Winners?"Main_SkillsDarks":"Main_Skills"} ref={MySkillsRef} >
  <span data-aos='fade-up'><h1>My Skills</h1></span>
<div className="Main_InformationSkills" data-aos='fade-up'>
    <div className="Button_Skills">
      <button className={Infomations === "All"? 'buttonClick' :Winners?'buttonDark':'button'}  onClick={()=>setInformations("All")}>All</button>
      <button className={Infomations === "Frontend"? 'buttonClick' :Winners?'buttonDark':'button'}  onClick={()=>setInformations("Frontend")}>Frontend</button>
      <button className={Infomations === "Backend"? 'buttonClick' :Winners?'buttonDark':'button'}  onClick={()=>setInformations("Backend")}>Backend</button>
      <button className={Infomations === "UsingTools"? 'buttonClick' :Winners?'buttonDark': 'button'}  onClick={()=>setInformations("UsingTools")}>Using Tools</button>
    </div>
    <div className="SubSkills">
    { Infomations === "All"? <>

  {skills
    .map((skill, index) => (
      <div key={index} className="BackScreen">
        <div className="container noselect" onClick={() => location.href = skill.link}>
          <div className="canvas">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`tracker tr-${i+1}`}></div>
            ))}
            <div id={Winners ? "cardDark" : "card"}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
              <a href={skill.link} target="_blank">
                <p>{skill.name} <i className="ri-arrow-right-up-fill"></i></p>
              </a>
            </div>
          </div>
        </div>
      </div>
  ))}

      </>
      :Infomations === "Frontend"? <>
   {skills
   .filter(skills =>skills.type === 'frontend' )
    .map((skill, index) => (
      <div key={index} className="BackScreen" >
        <div className="container noselect" onClick={() => location.href = skill.link}>
          <div className="canvas">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`tracker tr-${i+1}`}></div>
            ))}
            <div id={Winners ? "cardDark" : "card"}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
              <a href={skill.link} target="_blank">
                <p>{skill.name} <i className="ri-arrow-right-up-fill"></i></p>
              </a>
            </div>
          </div>
        </div>
      </div>
  ))}

      </>:Infomations === "Backend"?
      <>   {skills
   .filter(skills =>skills.type === 'backend' )
    .map((skill, index) => (
      <div key={index} className="BackScreen">
        <div className="container noselect" onClick={() => location.href = skill.link}>
          <div className="canvas">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`tracker tr-${i+1}`}></div>
            ))}
            <div id={Winners ? "cardDark" : "card"}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
              <a href={skill.link} target="_blank">
                <p>{skill.name} <i className="ri-arrow-right-up-fill"></i></p>
              </a>
            </div>
          </div>
        </div>
      </div>
  ))}
      </>
      :Infomations === "UsingTools"?  <> 
    {skills
   .filter(skills =>skills.type === 'UsingTools' )
    .map((skill, index) => (
      <div key={index} className="BackScreen">
        <div className="container noselect" onClick={() => location.href = skill.link}>
          <div className="canvas">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`tracker tr-${i+1}`}></div>
            ))}
            <div id={Winners ? "cardDark" : "card"}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
              <a href={skill.link} target="_blank">
                <p>{skill.name} <i className="ri-arrow-right-up-fill"></i></p>
              </a>
            </div>
          </div>
        </div>
      </div>
  ))}
     </> :null }
    </div>
  </div>
    {/* My Project*/}
    <div className={Winners?"Main_MyprojectsDark":"Main_Myprojects"} ref={MyProject} data-aos='fade-up'>
      <h1>My Project</h1>
    </div>
    <div className="Main_Cards" data-aos='fade-up'>
<div className="card" onClick={()=>{location.href='./ex'}}>
  <div className="top-section">
    <div className="border"></div>
    <div className="icons">
      <div className="logo">
      <img src={'/Image/logo instagram.png'} alt="this is logo" width={200} height={200}/>
      </div>
      <div className="social-media">
      
   <a href="https://www.instagram.com/digitaltaskdev/">{Socail_Media.instagram}</a>    
   <a href="/">  {Socail_Media.Web}</a>    
    
      </div>
    </div>
  </div>
  <div className="bottom-section">
    <span className="titles">Digital Task</span>
    <div className="row row1">
      <div className="item">
        <span className="big-text">6</span>
        <span className="regular-text">Pages</span>
      </div>
      <div className="item">
        <span className="big-text">100%</span>
        <span className="regular-text">Free for use</span>
      </div>
      <div className="item">
        <span className="big-text">38,631</span>
        <span className="regular-text">Show Pages</span>
      </div>
    </div>
  </div>
</div>
  
    </div>



    

</div>
 </>)}


export default Main
