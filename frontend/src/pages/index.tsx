import type { NextPage } from "next";
// import {Link} from "next";
import { useCallback } from "react";
import styles from "./index.module.css";
import Image from 'next/image'
// import TypeIt from "typeit";
import React, { useEffect, useRef } from 'react';


const Landing: NextPage = () => {
  const elementRef = useRef();
  const words = ['Naruto', 'Rick and Morty', 'Marvel'];

  // useEffect(() => {
  //   new TypeIt(elementRef.current, {
  //     strings: words.map(word => `Bring characters from ${word} to life`),
  //     speed: 50,
  //     breakLines: false,
  //     waitUntilVisible: true
  //   }).go();
  // }, []);



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
              src="cosona-logo.svg"      
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
              <Image className={styles.vectorIcon} alt="" src="personas-icon.svg" width={33} height={23}/>
              <div className={styles.personas}>Personas</div>
            </div>
            <div className={styles.chatbtn} onClick={onChatBtnContainerClick}>
              <Image className={styles.vectorIcon1} alt="" src="chats-icon.svg" width={25} height={22} />
              <div className={styles.personas}>Chats</div>
            </div>
            <div
              className={styles.createbtn}
              onClick={onCreateBtnContainerClick}
            >
              <Image className={styles.vectorIcon2} alt="" src="create-icon.svg" width={22} height={22} />
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
            alt=""
            src="cohere-logo-black.svg"
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
