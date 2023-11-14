import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./personas.module.css";
import Image from 'next/image';


const PersonasDesignA: NextPage = () => {
  const onFrameContainer4Click = useCallback(() => {
    // Please sync "Chat Design A" to the project
  }, []);

  return (
    <div className={styles.personasDesignA}>
      <div className={styles.mainFrame}>
        <div className={styles.colLeft}>
          <div className={styles.sideBar}>
            <div className={styles.logo}>
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
            </div>
            <div className={styles.sideBarInner}>
              <div className={styles.personasIconParent}>
                  <Image className={styles.personasIcon} alt="" src="personas-icon.svg" width={32} height={22} />

                <b className={styles.cosonas1}>Co:Sonas</b>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.plusVectorWrapper}>
              <Image className={styles.plusVectorIcon} alt="" src="plus-vector.svg" width={22} height={22} />

              </div>
              <div
                className={styles.chatIconWrapper}
                onClick={onFrameContainer4Click}
              >
                <Image className={styles.chatIcon} alt="" src="chats-icon.svg" width={25} height={22} />

              </div>
            </div>
            <div className={styles.userAltParent}>
              <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <div className={styles.myCosonas}>My Co:Sonas</div>
            </div>
            <div className={styles.starIconParent}>
            <Image className={styles.starIcon} alt="" src="star-icon.svg" width={30} height={41} />
              <div className={styles.myCosonas}>Star Wars</div>
            </div>
            <div className={styles.starIconParent}>
            <Image className={styles.narutoIcon} alt="" src="naruto-icon.svg" width={31} height={26} />

              <div className={styles.myCosonas}>Naruto</div>
            </div>
            <div className={styles.starIconParent}>
            <Image className={styles.avengerIcon} alt="" src="avenger-icon.svg" width={31} height={36} />

              <div className={styles.myCosonas}>Marvel</div>
            </div>
            <div className={styles.starIconParent}>
            <Image className={styles.starIcon} alt="" src="hp-icon.svg" width={30} height={30}/>

              <div className={styles.myCosonas}>Harry Potter</div>
            </div>
            <div className={styles.starIconParent}>
            <Image className={styles.miscIcon} alt="" src="misc-icon.svg" width={30} height={30}/>
              <div className={styles.myCosonas}>Miscellaneous</div>
            </div>
          </div>
        </div>
        <div className={styles.colRight}>
          <div className={styles.peopleBoxWrapper}>
            <div className={styles.peopleBox}>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgWrapper}>
                      <img
                        className={styles.characterimgIcon}
                        alt=""
                        src="/character-img.svg"
                      />
                      <Image className={styles.characterimgIcon} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b className={styles.yourOwnCharacter}>
                        Your Own Character
                      </b>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn}>
                    <b className={styles.create}>Create!</b>
                  </div>
                </div>
              </div>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgContainer}>
                    <Image className={styles.characterimgIcon1} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b className={styles.yourOwnCharacter}>Sasuke</b>
                      <div className={styles.seriesWrapper}>
                        <div className={styles.cosonas}>Naruto</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn1}>
                    <b className={styles.create}>Chat Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgFrame}>
                    <Image className={styles.characterimgIcon1} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b
                        className={styles.yourOwnCharacter}
                      >{`Harry Potter `}</b>
                      <div className={styles.seriesWrapper}>
                        <div className={styles.cosonas}>Harry Potter</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn1}>
                    <b className={styles.create}>Chat Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgWrapper1}>
                    <Image className={styles.characterimgIcon1} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b className={styles.yourOwnCharacter}>Sherlock Holmes</b>
                      <div className={styles.seriesWrapper}>
                        <div className={styles.cosonas}>Sherlock Holmes</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn1}>
                    <b className={styles.create}>Chat Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgWrapper2}>
                    <Image className={styles.characterimgIcon1} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b className={styles.yourOwnCharacter}>Master Yoda</b>
                      <div className={styles.seriesWrapper}>
                        <div className={styles.cosonas}>Starwars</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn1}>
                    <b className={styles.create}>Chat Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgWrapper3}>
                    <Image className={styles.characterimgIcon1} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b className={styles.yourOwnCharacter}>Rick Sanchez</b>
                      <div className={styles.seriesWrapper}>
                        <div className={styles.cosonas}>Rick and Morty</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn1}>
                    <b className={styles.create}>Chat Now</b>
                  </div>
                </div>
              </div>
              <div className={styles.createYourOwn}>
                <div className={styles.characterinfoParent}>
                  <div className={styles.characterinfo}>
                    <div className={styles.characterimgWrapper4}>
                    <Image className={styles.characterimgIcon1} alt="" src="user-alt.svg" width={138} height={138} />

                    </div>
                    <div className={styles.content}>
                      <b className={styles.yourOwnCharacter}>Tony Stark</b>
                      <div className={styles.seriesWrapper}>
                        <div className={styles.cosonas}>Marvel</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chatnowbtn1}>
                    <b className={styles.create}>Chat Now</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonasDesignA;
