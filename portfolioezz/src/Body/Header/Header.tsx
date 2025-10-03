import { useContext, useEffect, useRef, useState } from 'react';
import './Header.css';
import { ContextAll } from '../../Context/ContextProvider';

const Header = () => {
  const context = useContext(ContextAll);
  if (!context) return null;

  const {  Winners, setWinners ,scrollToObject} = context;
      const header =useRef<HTMLDivElement|null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const sidebar = useRef<HTMLDivElement | null>(null);
  const menu_toggle = useRef<HTMLInputElement | null>(null);

  const [Click, SetClick] = useState<boolean>(false);
const handle_toggle = ()=>{
  SetClick(!Click);
  if(!menu_toggle.current)return;
  menu_toggle.current.checked = false;
}
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!header.current) return;
  if (scrollY > 10) {
    header.current.style.backgroundColor = Winners
      ? 'rgba(13, 13, 13, 0.58)'  
      : 'rgba(255, 255, 255, .59)';
  } else {
  
    header.current.style.backgroundColor = 'transparent';
  }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [Winners]);

useEffect(() => {

  
  const handleClick=()=>{
 if(!sidebar.current) return;
 sidebar.current.style.top=Click?'0%':'-1000%';
  }
  handleClick();
  setTimeout(() => {
    if (navbarRef.current) {
      navbarRef.current.style.animation = Click
        ? 'NavOpen 0.5s forwards'
        : 'NavClose 0.5s forwards';
    }
  }, 50);
}, [Click, Winners]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWinners(e.target.checked);
  };

  return (
    <header ref={header}>
      <h1 className={Winners ? 'h1sDark' : 'h1s'}>
        Ezz<span className={Winners ? 'spanDark' : 'spans'}>Portfolio</span>
      </h1>
      <nav className={Winners ? 'NavsDark' : 'Navs'}>
        <div className="Nav">
          <a href="#Home" onClick={()=>{scrollToObject('Home')}}>Home</a>
          <a href="#About" onClick={()=>{scrollToObject('About')}}>About</a>
          <a href="#Skills" onClick={()=>{scrollToObject('MySkills')}}>Skills</a>
          <a href="#Skills" onClick={()=>{scrollToObject('MyProject')}}>Project</a>
         
        </div>
        <label className="ui-switch">
          <input type="checkbox"  checked={Winners} onChange={handleChange} />
          <div className="slider"><div className="circle"></div></div>
        </label>
      </nav>

      <div ref={navbarRef} className={Winners ? 'Mobile_NavDark' : 'Mobile_Nav'}>
                        <label className="hamburger">
  <input type="checkbox" ref={menu_toggle} onClick={() => SetClick(!Click) }/>
  <svg viewBox="0 0 32 32">
    <path className={Winners?'lineDark line-top-bottom':'line line-top-bottom'} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className={Winners?'lineDark':'line'} d="M7 16 27 16"></path>
  </svg>
</label>
      
            <div className={Winners ? 'Main_NavbarDark' : 'Main_Navbar'}ref={sidebar} style={{transition:'0.5s ease'}}>
             
       <div className="Nav">
                  <a href="#Home" onClick={()=>{scrollToObject('Home'),handle_toggle() }}>Home</a>
                  <br />
                  
                 <div className="hr"></div>
                   <br />
                
          <a href="#About" onClick={()=>{scrollToObject('About'),handle_toggle()}}>About</a>
                  <br />
               
  <div className="hr"></div>
                   <br />
                 
          <a href="#Skills" onClick={()=>{scrollToObject('MySkills'),handle_toggle()}}>Skills</a>
          
                  <br />
                    <div className="hr"></div>
                   <br />
          <a href="#Skills" onClick={()=>{scrollToObject('MyProject'),handle_toggle()}}>Project</a>
              
</div>
            </div>
        
       
          <>
      
            <label className="ui-switch">
              <input type="checkbox" checked={Winners} onChange={handleChange} />
              <div className="slider"><div className="circle"></div></div>
            </label>
          </>
        
      </div>
    </header>
  );
};

export default Header;
