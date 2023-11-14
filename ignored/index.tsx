import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "../style/index.module.css";
// import personasIconF from '../public/personas-icon.svg';
// import cosonoaLogoF from '../public/cosona-logo.svg';
// import chatsIconF from '../public/chats-icon.svg';
// import createIconF from '../public/create-icon.svg';
// import cohereLogo from'../public/cohere-logo-black.svg';

import '../style/index.css'; 
import Image from 'next/image'

const Landing: NextPage = () => {
  const onPersonaBtnContainerClick = useCallback(() => {
    // Please sync "Personas Design A" to the project
  }, []);

  const onChatBtnContainerClick = useCallback(() => {
    // Please sync "Chat Design A" to the project
  }, []);

  const onCreateBtnContainerClick = useCallback(() => {
    // Please sync "Chat Design A" to the project
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.navBar}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <Image
              className={styles.vectorTracedIcon}
              alt=""
              src="../public/cosona-logo.svg"      
              width={87}
              height={95}
            />
          </div>
        </div>
        <div className={styles.actionsWrapper}>
          <div className={styles.actions}>
            <div
              className={styles.personabtn}
              onClick={onPersonaBtnContainerClick}
            >
              <Image className={styles.vectorIcon} alt="" src="../public/personas-icon.svg" width={33} height={23}/>
              <div className={styles.personas}>Personas</div>
            </div>
            <div className={styles.chatbtn} onClick={onChatBtnContainerClick}>
              <Image className={styles.vectorIcon1} alt="" src="../public/chats-icon.svg" width={25} height={22} />
              <div className={styles.personas}>Chats</div>
            </div>
            <div
              className={styles.createbtn}
              onClick={onCreateBtnContainerClick}
            >
              <Image className={styles.vectorIcon2} alt="" src="../public/create-icon.svg" width={22} height={22} />
              <div className={styles.personas}>Create</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.cosonaParent}>
          <b className={styles.cosona}>
            <p className={styles.bringCharactersFrom}>Co:Sona</p>
          </b>
          <Image
            className={styles.cohereLogoIcon}
            alt="Co:Here"
            src="../public/cohere-logo-black.svg"
            width={218}
            height={37}
          />
        </div>
        <div className={styles.bringCharactersFromInsertWrapper}>
          <div className={styles.personas}>
            <p
              className={styles.bringCharactersFrom}
            >{`Bring characters from {insert}`}</p>
            <p className={styles.bringCharactersFrom}>to life</p>
          </div>
        </div>
        <div className={styles.getChattingWrapper}>
          <div className={styles.personas}>Get Chatting</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
