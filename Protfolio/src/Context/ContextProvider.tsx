import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";


type Contexts = {
  Winners: boolean;
  setWinners: Dispatch<SetStateAction<boolean>>;
  Top: boolean;
  setTop: Dispatch<SetStateAction<boolean>>;
 AboutMe:boolean,
 Skills:boolean,
 contact:boolean,
 setAboutMe: Dispatch<SetStateAction<boolean>>,
 setSkills: Dispatch<SetStateAction<boolean>>,
 setcontact: Dispatch<SetStateAction<boolean>>
};


 const ContextAll = createContext<Contexts | null>(null);


type Props = {
  children: ReactNode;
};


const ContextProvider = ({ children }: Props) => {
  const [Winners, setWinners] = useState<boolean>(false);
  const [Top, setTop] = useState<boolean>(false);
 const [AboutMe, setAboutMe] = useState<boolean>(false);
  const [Skills, setSkills] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);
  const CA: Contexts = {
    Winners,
    setWinners,
    setTop,
    Top,
    AboutMe,
    Skills,
    contact,
    setAboutMe,
    setSkills,
    setcontact
   
  };

  return (
    <ContextAll.Provider value={CA}>
      {children}
    </ContextAll.Provider>
  );
};

export  {ContextProvider,ContextAll};
