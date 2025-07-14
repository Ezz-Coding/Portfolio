import './Tools.css';
import Video1 from './../../../Tools/Vidoe1.webm';
import Video2 from './../../../Tools/Vidoe2.webm';
import { useContext } from 'react';
import { ContextAll } from '../Context/ContextProvider';
import Typewriter from 'typewriter-effect';

const Tools = () => {
  const context = useContext(ContextAll);
  if (!context) return null;

  const { Top, Winners } = context;
  const videoSrc = Winners ? Video2 : Video1;

  return (
    <>
      <video
        className="Vidoe1"
        src={videoSrc}
        controls={false}
        autoPlay
        muted
        playsInline
        preload="none"
       
      ></video>

      <div className="GetInformtion">
        <h1>Ezz Abu-Rmailh</h1>
        <br />
        <p className="typing-textFS">
Full-Stack
        </p>
        <span>
          <p className={Winners ? 'typing-textSEDark' : 'typing-textSE'}>
 <Typewriter
  options={{
    strings: [ 'Software Engineer','Web Developer'],
    autoStart: true,
    loop: true,
    delay: 150,
  }}
/>
          </p>
        </span>

        <div className={Winners ?  'Dark': 'light'}>
          <i
            className="ri-arrow-down-double-fill"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight * 1.1, behavior: 'smooth' })
            }
          ></i>
        </div>
      </div>

      {Top && (
        <div className={Winners ? 'TopsDark' : 'Tops'}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="ri-arrow-up-fill"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Tools;
