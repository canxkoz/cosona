import React from "react";
import Image from "next/image";
import Link from "next/link";
import CosanaBtn from "@/components/CosanaBtn";
import styles from "./btn.module.css";

interface NavBarProps {}
const NavBar: React.FC<NavBarProps> = ({}) => (
  <div className={styles.navBar}>
    <Link href="/">
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
    </Link>
    <div className={styles.actionsWrapper}>
      <div className={`${styles.actions}`}>
        <CosanaBtn text="Personas" href="/Personas" icon="persona" type="personabtn" />
        <CosanaBtn text="Chats" href="/Chat" icon="chat" type="chatbtn" />
        <CosanaBtn text="Create" href="/Create" icon="create" type="createbtn" />
      </div>
    </div>
  </div>
);

export default NavBar;
