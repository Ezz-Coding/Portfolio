import { useContext} from 'react';
import './Footer.css'
import { ContextAll } from '../../Context/ContextProvider';
const Footer = () => {

const context = useContext(ContextAll);
if (!context) {
  return null;
}
    const {Winners} = context;

  return (
   <>
 <footer className={Winners?'FooterDark':'Footer'}>
    <div className={Winners?"MainFooterDark":"MainFooter" }>
    <p>&copy; 2025 Ezz Abu Rmailh. All rights reserved.</p>


</div>
   </footer>
   </>
  )
}

export default Footer
