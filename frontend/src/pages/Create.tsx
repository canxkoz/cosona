import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styles from "./create.module.css";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";
import Link from "next/link";

const Create: NextPage = () => {
  const [file, setFile] = useState<any>();

  const handleFileUpload = async () => {
    let formData = new FormData();
    formData.append("file", file);
  };

  return (
    <div className={styles.create}>
      <NavBar />
      <div className={styles.frameParent}>
        <div className={styles.createYourCosonaWrapper}>
          <b className={styles.createYourCosona}>Create Your Co:Sona</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.characterimgWrapper}>
            <Image
              className={styles.characterimgIcon1}
              alt=""
              src="user-alt.svg"
              width={138}
              height={138}
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.nameWrapper}>
              <div className={styles.name}>Name</div>
            </div>
            <input
              className={styles.nameContainer}
              type="text"
              id="nameInput"
              name="name"
              maxLength={25}></input>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.nameWrapper}>
              <div className={styles.name}>File Upload</div>
            </div>
            <input type="file" onChange={handleFileUpload} className={styles.uploadWrapper}></input>
          </div>
          <Link href="/Chat?character=harrypotter" className="no-underline">
            <button className={styles.createYourCosonaContainer}>
              <div className={styles.personas}>Create Your Co:Sona</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Create;
