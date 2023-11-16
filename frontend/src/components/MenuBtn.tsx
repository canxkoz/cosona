import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./btn.module.css";

interface MenuBtnProps {
  name: string;
  href: string;
  selected: boolean;
  imageType?: "user" | "star" | "naruto" | "avenger" | "hp" | "misc" | ""; // New prop for image type
}

const MenuBtn: React.FC<MenuBtnProps> = ({ name, href, selected, imageType = "user" }) => {
  const type = selected ? "selectedBtn" : "normalBtn";

  const getImageSource = () => {
    switch (imageType) {
      case "star":
        return "star-icon.svg";
      case "naruto":
        return "naruto-icon.svg";
      case "avenger":
        return "avenger-icon.svg";
      case "hp":
        return "hp-icon.svg";
      case "misc":
        return "misc-icon.svg";
      case "":
        return "user-alt.svg";
      default:
        return "user-alt.svg"; // Default value
    }
  };

  return (
    <Link href={href} className={`${styles[type]}`}>
      <Image className={styles.userAltIcon} alt="" src={getImageSource()} width={30} height={41} />
      <div className={styles.characterTxt}>{name}</div>
    </Link>
  );
};

export default MenuBtn;
