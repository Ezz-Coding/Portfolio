
import Index from './Body/Index';

import { useEffect, useState } from "react";
import Loading from './Body/Loading/Loading';
import AOS from "aos";


const Portfolio = () => {
 useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
const [click,setclick] = useState<boolean>(false);
  
      setTimeout(()=>{
  setclick(true)
      },2000)
    
  return (
   <>
 {click?<Index/>:<Loading/>}

   </>
  )
}

export default Portfolio
