import { useContext, useEffect, useState } from 'react';
import './Footer.css'
import { ContextAll } from '../../Context/ContextProvider';
const Footer = () => {
const [Anmations ,SetAnmations] = useState<boolean>(false);
const context = useContext(ContextAll);
if (!context) {
  return null;
}
    const {Winners} = context;
    useEffect(() => {
  const handleScroll = () => {
          const scrollY: number = window.scrollY;
         
    
          
           
             if (scrollY > 3300) {
              SetAnmations(true)
            }
            else{
              SetAnmations(false)
            }
          
        };
    
        window.addEventListener('scroll', handleScroll);
    
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [Anmations]);
  return (
   <>
  {Anmations? <footer className={Winners?'FooterDark':'Footer'}>
    <div className={Winners?"MainFooterDark":"MainFooter" }>
    <p>&copy; 2025 Ezz Abu Rmailh. All rights reserved.</p>


</div>
   </footer>:null}
   </>
  )
}

export default Footer
