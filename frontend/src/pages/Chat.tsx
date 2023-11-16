import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./chat.module.css";
import Image from "next/image";
import { MdOutlineSend } from "react-icons/md";
import CosanaBtn from "@/components/CosanaBtn";
import MenuBtn from "@/components/MenuBtn";
import ResponseBox from "@/components/ReponseBox";

const ChatDesignA: NextPage = () => {
  // odd is user input, even is chatbot output
  const [chat, setChat] = useState<string[]>([]);
  const [textareaInput, setTextareaInput] = useState<string>("");
  const [character, setCharacter] = useState<string>("");

  // Event handler to update the state when the textarea value changes
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaInput(event.target.value);
  };

  // Event handler for the form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newChat = [...chat, textareaInput];
    // Do something with the textareaInput, e.g., send it to an API
    console.log("Textarea value:", textareaInput);
    const response = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      body: JSON.stringify({
        text: newChat,
        character: character,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    // parse json for display, and then set that to the chat state
    setTextareaInput("");
    // setChat([...newChat, json.message]);
  };

  // on page load, fetch the character we need to get from thee url
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const character = urlParams.get("character");
    if (!character) {
      throw new Error("Character not found");
    }
    setCharacter(character);
  }, []);

  return (
    <div className={styles.chatDesignA}>
      <div className={styles.mainFrame}>
        <div className={styles.colLeft}>
          <div className={styles.sideBar}>
            <Link href="/" className={styles.cosonaLogoParent}>
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
            </Link>
            <div className={styles.frameParent}>
              <CosanaBtn text="Chats" href="" icon="chat" type="chatbtnsm" />
            </div>
            <div className={styles.frameGroup}>
              <CosanaBtn text="" href="/Create" icon="create" type="createbtnmd" />
              <CosanaBtn text="" href="/Personas" icon="persona" type="personasbtnmd" />
            </div>
            <MenuBtn name="Character 1" href="" selected={true} />
            <MenuBtn name="Character 2" href="" selected={false} />
            <MenuBtn name="Character 3" href="" selected={false} />
            <MenuBtn name="Character 4" href="" selected={false} />
            <MenuBtn name="Character 5" href="" selected={false} />
          </div>
        </div>
        <div className={styles.colRight}>
          {/* div for storing all messages, so append them here */}
          <div className={styles.responseContainer}>
            <div>
              {chat.map((message, index) => {
                return (
                  <ResponseBox
                    key={index}
                    response={message}
                    name={index % 2 === 0 ? "You" : "Bot"}
                    pictureSrc={index % 2 === 0 ? "" : ""}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.chatContainer}>
            {/* u might need to fix this to append with the content above */}
            <form onSubmit={handleSubmit} className={styles.inputContainer}>
              <textarea
                className={styles.inputContainer}
                onChange={handleTextareaChange}
                value={textareaInput}
              />
              <button type="submit">
                <MdOutlineSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDesignA;
