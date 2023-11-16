// CharacterCard.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css"; // Adjust the path based on your project structure

interface CharacterCardProps {
  src: string;
  characterName: string;
  seriesName: string;
  chatUrl: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  src,
  characterName,
  seriesName,
  chatUrl,
}) => {
  const isCreateButton = chatUrl === "/Create";
  if (src == null || src == "") {
    src = "user-alt.svg";
  }

  return (
    <div className={styles.cardBase}>
      <div className={styles.characterinfoParent}>
        <div className={styles.characterinfo}>
          <div className={styles.characterimgContainer}>
            <Image className={styles.characterimgIcon} alt="" src={src} width={138} height={138} />
          </div>
          <div className={styles.content}>
            <b className={styles.yourOwnCharacter}>{characterName}</b>
            <div className={styles.seriesWrapper}>
              <div className={styles.cosonas}>{seriesName}</div>
            </div>
          </div>
        </div>
        {isCreateButton ? (
          <Link href={chatUrl} passHref className={styles.createbtn}>
            <b className={`${styles.create} justify-center`}>Create Now</b>
          </Link>
        ) : (
          <Link href={chatUrl} passHref className={styles.chatbtn}>
            <b className={`${styles.create} justify-center`}>Chat Now!</b>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
