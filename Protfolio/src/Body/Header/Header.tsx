import { useContext, useEffect, useState } from 'react';
import './Header.css'
import { ContextAll } from '../../Context/ContextProvider';
const Header = () => {
   const context = useContext(ContextAll);
  if (!context) return null;
  const {setAboutMe,setSkills,setcontact,Winners,setWinners}= context;
  const [Click,SetClick] = useState(false);
  useEffect(() => {
    const handleScroll = () => {  
      const scrollY: number = window.scrollY;
      const header = document.getElementById('header');

  if (header) {
  if (Winners) {
    header.style.backgroundColor =
      scrollY > 10 ? 'rgba(13, 13, 13, 0.58)' : 'transparent';
  } else {
    header.style.backgroundColor =
      scrollY > 10 ? 'rgba(255, 255, 255, 0.29)' : 'transparent';
  }
}

    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWinners(e.target.checked);
    console.log(Winners);
    
    
  };
  const Handle =(Name:string)=>{
    if (Name === 'Home') {
         
window.scrollTo({top: 0, behavior: 'smooth'})
    }
       if (Name === 'About') {
          setAboutMe(true)
window.scrollTo({top: window.innerHeight * 1.1, behavior: 'smooth'})
    }
       if (Name === 'Skills') {
          setSkills(true)
window.scrollTo({top: window.innerHeight * 3.1, behavior: 'smooth'})
    }
       if (Name === 'Contact') {
          setcontact(true)
window.scrollTo({top:window.innerHeight * 4.5, behavior: 'smooth'})
    }
 
  }
  return (
  <>
<header id='header'>
    <h1 className={Winners?'h1sDark':'h1s'}>Ezz<span className={Winners?'spanDark':'spans'}>Portfolio</span></h1>
    <nav className={Winners?'NavsDark':'Navs'}>
        <div className="Nav">
        <a href="#Home"onClick={()=>{Handle('Home')}}>Home</a>
        <a href="#About"onClick={()=>{Handle('About')}}>About</a>
        <a href="#Skills"onClick={()=>{Handle('Skills')}}>Skills</a>
        <a href="#Contact"onClick={()=>{Handle('Contact')}}>Contact</a>
       </div>

<label className="ui-switch">
  <input type="checkbox"  checked={Winners}  onChange={handleChange}/>
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>

    </nav>
    <div className={Winners?"Mobile_NavDark":"Mobile_Nav"}>
      {Click? <div className="Nav">
        <div className={Winners?"Main_NavbarDark":"Main_Navbar"}>
          <div className={Winners?"closeDark":"close"}><i className="ri-close-large-fill" onClick={()=>SetClick(!Click)}></i></div>
        <div className="ModeDarks">
           <label className="ui-switch">
  <input type="checkbox"  checked={Winners} onChange={handleChange}/>
  <div className="slider">
    <div className="circle"></div>
  </div>
</label></div> 
        <a href="#Home"onClick={()=>{Handle('Home')}}>Home</a>
        <br />
        <br />
        <br />
        <a href="#About"onClick={()=>{Handle('About')}}>About</a>
        <br />
        <br />
        <br />

        <a href="#Skills"onClick={()=>{Handle('Skills')}}>Skills</a>
        <br />
        <br />
        <br />

        <a href="#Contact"onClick={()=>{Handle('Contact')}}>Contact</a>
        
        </div>
       </div>:<>
       <div className={Winners?"ThreeLineDark":"ThreeLine"}><i className="ri-align-justify" onClick={()=>SetClick(!Click)}></i></div>
      
<label className="ui-switch">
  <input type="checkbox"  checked={Winners}  onChange={handleChange}/>
  <div className="slider">
    <div className="circle"></div>
  </div>
</label></>
    }
       
    </div>
</header>
  </>
  )
}

export default Header
