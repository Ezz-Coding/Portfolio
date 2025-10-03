import './Home.css';
import { useContext } from 'react';
import { ContextAll } from '../../Context/ContextProvider';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';

const Tools = () => {
  const context = useContext(ContextAll);
  if (!context) return null;

  const { Winners, HomeRef, scrollToObject } = context;


  return (
    <>
      <video
        ref={HomeRef}
        className="Vidoe1"
        src={Winners?'/Image/Vidoe2.webm':'/Image/Vidoe1.webm'}
        controls={false}
        autoPlay
        muted
        playsInline
        preload="none"
      />

      <div className="GetInformtion">
        <h1>Ezz Abu-Rmailh</h1>
        <br />
        <p className="typing-textFS">Full-Stack</p>
        <span>
          <div className={Winners ? 'typing-textSEDark' : 'typing-textSE'}>
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Web Developer'],
                autoStart: true,
                loop: true,
                delay: 150,
              }}
            />
          </div>
        </span>

        <div className={Winners ? 'Dark' : 'light'}>
          <i
            className="ri-arrow-down-double-fill"
            onClick={() => scrollToObject('About')}
          ></i>
        </div>
      </div>

   
    </>
  );
};

export default Tools;
