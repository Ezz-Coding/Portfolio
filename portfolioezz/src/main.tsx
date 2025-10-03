import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './Portfolio'
import 'remixicon/fonts/remixicon.css';
import { ContextProvider } from './Context/ContextProvider';
import "aos/dist/aos.css";


 


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ContextProvider>
<Portfolio/>
</ContextProvider>
    
  </StrictMode>,
)
