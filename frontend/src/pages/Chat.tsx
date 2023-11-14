import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./chat.module.css";
import Image from 'next/image'


const ChatDesignA: NextPage = () => {
  const onFrameContainer6Click = useCallback(() => {
    // Please sync "Personas Design A" to the project
  }, []);

  return (
    <div className={styles.chatDesignA}>
      <div className={styles.mainFrame}>
        <div className={styles.colLeft}>
          <div className={styles.sideBar}>
            <div className={styles.cosonaLogoParent}>
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
                    className={styles.cohereLogoIcon}
                    alt=""
                    src="cohere-logo-white.svg"
                    width={218}
                    height={37}
                  />
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.vectorParent}>
              <Image className={styles.vectorIcon} alt="" src="chats-icon.svg" width={25} height={22} />
                <b className={styles.chats}>Chats</b>
              </div>
              <div className={styles.vectorWrapper}>
              <Image className={styles.vectorIcon1} alt="" src="left-close.svg" width={20} height={16} />

              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.vectorContainer}>
              <Image className={styles.vectorIcon2} alt="" src="plus-vector.svg" width={22} height={22} />
              </div>
              <div
                className={styles.vectorFrame}
                onClick={onFrameContainer6Click}
              >
                <Image className={styles.vectorIcon3} alt="" src="personas-icon.svg" width={32} height={22} />
              </div>
            </div>
            <div className={styles.userAltParent}>
              <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <div className={styles.character1}>{`{Character 1}`}</div>
            </div>
            <div className={styles.userAltGroup}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <div className={styles.character1}>{`{Character 2}`}</div>
            </div>
            <div className={styles.userAltGroup}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <div className={styles.character1}>{`{Character 3}`}</div>
            </div>
            <div className={styles.userAltGroup}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <div className={styles.character1}>{`{Character 4}`}</div>
            </div>
          </div>
        </div>
        <div className={styles.colRight}>
          <div className={styles.stackOfChats}>
            <div className={styles.userAltParent1}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>{`{Charcter}: Hello!`}</b>
            </div>
            <div className={styles.userAltParent2}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>You: Hello!</b>
            </div>
            <div className={styles.userAltParent1}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>{`{Charcter}: Hello!`}</b>
            </div>
            <div className={styles.userAltParent2}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>You: Hello!</b>
            </div>
            <div className={styles.userAltParent1}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>{`{Charcter}: Hello!`}</b>
            </div>
            <div className={styles.userAltParent2}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>You: Hello!</b>
            </div>
            <div className={styles.userAltParent1}>
            <Image className={styles.userAltIcon} alt="" src="user-alt.svg" width={30} height={41} />
              <b className={styles.charcterHello}>{`{Charcter}: Hello!`}</b>
            </div>
          </div>
          <div className={styles.textboxoutter}>
            <div className={styles.textboxinner}>
              <div className={styles.inputText}>input text</div>
            </div>
            <Image className={styles.vectorIcon4} alt="" src="plane.svg" width={36} height={36} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDesignA;
