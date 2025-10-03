import { useContext } from 'react';
import './Footer.css';
import { ContextAll } from '../../Context/ContextProvider';

const Footer = () => {
  const context = useContext(ContextAll);
  if (!context) return null;
  const { Winners ,scrollToObject } = context;

  return (
    <footer className={Winners ? 'FooterDark' : 'Footer'}>
      <div className={Winners ? 'MainFooterDark' : 'MainFooter'}>
        
        <div className="FooterColumn">
          <h2>Ezz Abu Rmailh</h2>
          <p>Frontend & Full-Stack Developer passionate about building modern, user-friendly web applications.</p>
        </div>
        <div className="FooterColumn">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#Home"onClick={()=>scrollToObject("Home")}>Home</a></li>
            <li><a href="#About"onClick={()=>scrollToObject("About")}>About</a></li>
            <li><a href="#MySkills"onClick={()=>scrollToObject("MySkills")}>MySkills</a></li>
          </ul>
        </div>

         {/* My Content*/}
        <div className="FooterColumn">
          <h3>Follow Me</h3>
          <div className="SocialIcons">
            <a href="tel:+962798078447"><i className="ri-phone-fill"></i></a>
            <a href="https://github.com/Ezz-Coding" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill"></i>
            </a>
         <a href="https://www.instagram.com/ezzaburmailh/">
<i className="ri-instagram-fill"></i>
            </a>
            <a href="mailto:ezzrushdi1@gmail.com">
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="CopyRight">
        <p>&copy; 2025 Ezz Abu Rmailh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
