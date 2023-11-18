import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styles from "./personas.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import CosanaBtn from "@/components/CosanaBtn";
import MenuBtn from "@/components/MenuBtn";
import CharacterCard from "@/components/CharacterCard"; // Adjust the path based on your project structure

const PersonasDesignA: NextPage = () => {
  const [file, setFile] = useState<any>();

  const handleFileUpload = async () => {
    let formData = new FormData();
    formData.append("file", file);
    // const response = await fetch("http://localhost:8080/api/character/create", {
    //   method: "POST",
    //   body: formData,
    //     });
    // redirect("/Chat");
    // const json = await response.json();
  };

  const handleFilePath = (e: any) => {
    const files = e.target.files;
    const file = files[0];
    setFile(file);
  };

  return (
    <div className={styles.personasDesignA}>
      <div className={styles.mainFrame}>
        <div className={styles.colLeft}>
          <div className={styles.sideBar}>
            <Link href="/" className={styles.logo}>
              <Image
                className={styles.cosonaLogoIcon}
                alt=""
                src="cosona-logo.svg"
                width={87}
                height={95}
              />
              <div className={styles.cosonasParent}>
                <b className={styles.cosonas}>Co:Sonas</b>
                <Image
                  className={styles.cohereLogoWhiteIcon}
                  alt=""
                  src="cohere-logo-white.svg"
                  width={218}
                  height={37}
                />
              </div>
            </Link>
            <CosanaBtn text="Personas" href="" icon="persona" type="personabtnsm" />
            <div className={styles.frameParent}>
              <CosanaBtn text="" href="/Create" icon="create" type="createbtnmd" />
              <CosanaBtn text="" href="/Chat" icon="chat" type="chatbtnmd" />
            </div>
            <MenuBtn name="My Personas" href="" selected={true} imageType="" />
            <MenuBtn name="Star Wars" href="" selected={false} imageType="star" />
            <MenuBtn name="Naruto" href="" selected={false} imageType="naruto" />
            <MenuBtn name="Harry Potter" href="" selected={false} imageType="hp" />
            <MenuBtn name="Miscellaneous" href="" selected={false} imageType="misc" />
          </div>
        </div>
        <div className={styles.colRight}>
          <div className={styles.peopleBoxWrapper}>
            <div className={styles.peopleBox}>
              <CharacterCard
                src=""
                characterName="Your Own Character"
                seriesName=""
                chatUrl="/Create"
              />
              <CharacterCard
                src="sasuke.svg"
                characterName="Sasuke"
                seriesName="Naruto"
                chatUrl="/Chat?character=sasuke"
              />
              <CharacterCard
                src="tony.svg"
                characterName="Tony Stark"
                seriesName="Marvel"
                chatUrl="/Chat?character=tonystark"
              />
              <CharacterCard
                src="yoda.svg"
                characterName="Yoda"
                seriesName="Star Wars"
                chatUrl="/Chat?character=yoda"
              />
              <CharacterCard
                src="harry.svg"
                characterName="Harry Potter"
                seriesName="Harry Potter"
                chatUrl="/Chat?character=harrypotter"
              />
              <CharacterCard
                src="rick.svg"
                characterName="Rick Sanchez"
                seriesName="Rick and Morty"
                chatUrl="/Chat?character=ricksanchez"
              />
              <CharacterCard
                src="sherlock.svg"
                characterName="Sherlock Holmes"
                seriesName="Sherlock Holmes"
                chatUrl="/Chat?character=sherlockholmes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonasDesignA;
