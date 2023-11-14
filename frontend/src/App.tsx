import React from 'react';
import cohereLogo from'./assets/cohere-logo-black.svg';
import NavBar from "./components/NavBar.tsx";
import personasIconF from './assets/personas-icon.svg';
import cosonoaLogoF from './assets/cosona-logo.svg';
import chatsIconF from './assets/chats-icon.svg';
import createIconF from './assets/create-icon.svg';
import './App.css'; 

const App: React.FC = () => {
  const cosonoaLogo = cosonoaLogoF;
  const personasIcon = personasIconF;
  const chatsIcon = chatsIconF;
  const createIcon = createIconF;

  const onPersonaBtnContainerClick = () => {
    console.log('Persona button clicked');
  };

  const onChatBtnContainerClick = () => {
    console.log('Chat button clicked');
  };

  const onCreateBtnContainerClick = () => {
    console.log('Create button clicked');
  };

  return (
<div className="relative bg-linen w-screen h-screen overflow-hidden flex flex-col items-start justify-start gap-[69px] text-center text-21xl text-white font-consolas">
  <NavBar
    cosonoaLogo={cosonoaLogo}
    personasIcon={personasIcon}
    chatsIcon={chatsIcon}
    createIcon={createIcon}
    onPersonaBtnContainerClick={onPersonaBtnContainerClick}
    onChatBtnContainerClick={onChatBtnContainerClick}
    onCreateBtnContainerClick={onCreateBtnContainerClick}
  />
  <div className="flex flex-col items-start justify-center py-1 px-[113px] box-border gap-[24px] text-left text-black">
    <div className="flex flex-col items-start justify-center py-0 px-[15px] text-[128px] font-nunito-sans">
      <b className="relative inline-block w-[698px] h-[158px] shrink-0 [transform:_rotate(0.19deg)] [transform-origin:0_0]">
        <p className="m-0">Co:Sona</p>
      </b>
      <img
        className="relative"
        alt=""
        src={cohereLogo}
      />
    </div>
    <div className="rounded-mini bg-coral flex flex-row items-center justify-center text-31xl py-[27px] px-[30px]">
  <div className="relative">
    <p className="m-0">Bring characters from <span> <div className="words">
      <div>Naruto</div>
      <div>Starwars</div>
      <div>Rick and Morty</div>
    </div></span></p>
   
    <p className="m-0">to life</p>
  </div>
</div>


    <div className="rounded-mini bg-darkslateblue flex flex-row items-center justify-center py-2.5 px-[30px] text-center text-white hover:bg-darknavyblue transition-colors duration-200">
  <div className="relative">Get Chatting</div>
</div>

  </div>
</div>

  );
};

export default App;
