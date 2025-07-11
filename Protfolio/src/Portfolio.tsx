
import Index from './Body/Index';

import { useState } from "react";
import Loading from './Loading/Loading';


const Portfolio = () => {

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
