import React from 'react';

interface NavBarProps {
  cosonoaLogo: string;
  personasIcon: string;
  chatsIcon: string;
  createIcon: string;
  onPersonaBtnContainerClick: () => void;
  onChatBtnContainerClick: () => void;
  onCreateBtnContainerClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  cosonoaLogo,
  personasIcon,
  chatsIcon,
  createIcon,
  onPersonaBtnContainerClick,
  onChatBtnContainerClick,
  onCreateBtnContainerClick,
}) => (
  <div className="self-stretch bg-gray flex flex-row items-center justify-center py-2.5 px-0">
    <div className="flex flex-row items-center justify-start py-0 px-[30px] ">
        <div className="flex flex-row items-center justify-start w-3/4 py-2.5 px-0 box-border ">
            <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src={cosonoaLogo}
            />
        </div>
    </div>


    <div className="flex-1 flex flex-col items-end justify-center py-0 px-[30px]">
      <div className="flex flex-row items-center justify-start gap-[32px]">
        <div
          className="rounded-mini bg-plum flex flex-row items-center justify-center py-2.5 px-[30px] gap-[10px] cursor-pointer hover:bg-darkpink transition-colors duration-200"
          onClick={onPersonaBtnContainerClick}
        >
          <img
            className="relative w-[32.77px] h-[22.94px]"
            alt="N/A"
            src={personasIcon}
          />
          <div className="relative">Personas</div>
        </div>
        <div
          className="rounded-mini bg-darkslateblue flex flex-row items-center justify-center py-2.5 px-[30px] gap-[10px] cursor-pointer hover:bg-darknavyblue transition-colors duration-200"
          onClick={onChatBtnContainerClick}
        >
          <img
            className="relative w-[25px] h-[21.88px]"
            alt="N/A"
            src={chatsIcon}
          />
          <div className="relative">Chats</div>
        </div>
        <div
          className="rounded-mini bg-darkslategray flex flex-row items-center justify-center py-2.5 px-[30px] gap-[10px] cursor-pointer  hover:bg-darkgreen transition-colors duration-200"
          onClick={onCreateBtnContainerClick}
        >
          <img
            className="relative w-[21.88px] h-[21.88px]"
            alt=""
            src={createIcon}
          />
          <div className="relative">Create</div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
