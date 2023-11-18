import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";
import "./scroll.css";

import Image from "next/image";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import CosanaBtn from "@/components/CosanaBtn";
import NavBar from "@/components/NavBar";
const { useState } = React;

export function getAPIEndpoint(): string {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8080";
  } else {
    return "https://cosona.bxian03.com";
  }
}

function VertScroll() {
  const [words, setWords] = useState([
    "Your Favourite Media",
    "Naruto",
    "Rick and Morty",
    "Marvel",
    "Star Wars",
    "Harry Potter",
  ]);
  return (
    <div className="vertScroll">
      <div className="scroller">
        <span>
          {words[0]}
          <br />
          {words[1]}
          <br />
          {words[2]}
          <br />
          {words[3]}
        </span>
      </div>
    </div>
  );
}

const Landing: NextPage = () => {
  return (
    <div className={styles.landing}>
      <NavBar />
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
            <p className={styles.bringCharactersFrom}>{`Bring characters from `}</p>
            <VertScroll />
            <p className={styles.bringCharactersFrom}>to life</p>
          </div>
        </div>
        <CosanaBtn text="Get chatting" href="/Personas" type="chatbtn" icon="" />
      </div>
    </div>
  );
};

export default Landing;
