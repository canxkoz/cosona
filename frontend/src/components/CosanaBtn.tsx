import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./btn.module.css";

interface CosanaBtnProps {
  text: string;
  href: string;
  icon: "create" | "chat" | "persona" | "";
  type:
    | "chatbtn"
    | "createbtn"
    | "personabtn"
    | "chatbtnsm"
    | "createbtnmd"
    | "personasbtnmd"
    | "chatbtnmd"
    | "personabtnsm"; // New prop to determine the button type
}

const CosanaBtn: React.FC<CosanaBtnProps> = ({ text, href, icon, type }) => {
  const getIcon = () => {
    switch (icon) {
      case "create":
        return (
          <Image className={styles.createIcon} alt="" src="create-icon.svg" width={22} height={22}/>
        );
      case "chat":
        return (
          <Image className={styles.chatIcon} alt="" src="chats-icon.svg" width={25} height={22} />
        );
      case "persona":
        return (
          <Image className={styles.personaIcon} alt="" src="personas-icon.svg" width={33} height={23}/>
        );
      case "":
        return null;
      default:
        return null;
    }
  };

  return (
    <Link href={href} className={`${styles[type]}`}>
      {getIcon()}
      <div className={styles.text}>{text}</div>
    </Link>
  );
};

export default CosanaBtn;
