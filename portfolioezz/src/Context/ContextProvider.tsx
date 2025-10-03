import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  useRef,
  type RefObject,
} from "react";


type Contexts = {
  Winners: boolean;
  setWinners: Dispatch<SetStateAction<boolean>>;
HomeRef: RefObject<HTMLVideoElement|null>,
scrollToObject: (Props:'Home'|'About'|'MySkills'|"MyProject") => void,
AboutRef: RefObject<HTMLDivElement|null>,
MySkillsRef: RefObject<HTMLDivElement|null>,
MyProject: RefObject<HTMLDivElement|null>,
};


 const ContextAll = createContext<Contexts | null>(null);


type Props = {
  children: ReactNode;
};


const ContextProvider = ({ children }: Props) => {
  const [Winners, setWinners] = useState<boolean>(false);
  const HomeRef = useRef<HTMLVideoElement | null>(null)
  const AboutRef = useRef<HTMLDivElement | null>(null)
  const MySkillsRef = useRef<HTMLDivElement | null>(null)
  const MyProject = useRef<HTMLDivElement | null>(null)
 const scrollToObject =(Props:'Home'|'About'|'MySkills'|'MyProject'):void=> {
  if (Props === 'Home') {
HomeRef.current?.scrollIntoView({behavior:'smooth'})
    
  }
  else if (Props === 'About') {
AboutRef.current?.scrollIntoView({behavior:'smooth'})
    
  }
else if (Props === 'MySkills') {
MySkillsRef.current?.scrollIntoView({behavior:'smooth'})
  
}
else if (Props === 'MyProject') {
MyProject.current?.scrollIntoView({behavior:'smooth'})
  
}
else{
  console.error('Object is have the Error!');
  
}
 }
  const CA: Contexts = {
    Winners,
    setWinners,
    HomeRef,
    scrollToObject,
    AboutRef,
    MySkillsRef,
    MyProject
  };

  return (
    <ContextAll.Provider value={CA}>
      {children}
    </ContextAll.Provider>
  );
};

export  {ContextProvider,ContextAll};
