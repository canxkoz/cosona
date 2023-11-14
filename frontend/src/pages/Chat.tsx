import { FunctionComponent, useCallback } from "react";

const Chat: FunctionComponent = () => {
  const onFrameContainer6Click = useCallback(() => {
    // Please sync "Personas Design A" to the project
  }, []);

  return (
    <div className="relative bg-linen w-full h-[1024px] overflow-hidden text-center text-6xl text-white font-consolas">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] flex flex-row items-start justify-start">
        <div className="h-[1024px] flex flex-col items-start justify-start [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="bg-gray h-[1024px] flex flex-col items-center justify-start py-[22px] px-[17px] box-border gap-[20px] [transform:_rotate(180deg)] [transform-origin:0_0]">
            <div className="self-stretch rounded-mini flex flex-row items-center justify-center py-[15px] px-0 gap-[20px] text-16xl">
              <img
                className="relative w-[57.36px] h-[53.19px]"
                alt=""
                src="../assets/cosona-logo"
              />
              <div className="flex flex-col items-center justify-center">
                <b className="relative">Co:Sonas</b>
                <img
                  className="relative w-[85.64px] h-[14.37px] mt-[-2px]"
                  alt=""
                  src="/cohere-logo.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-mini flex flex-row items-center justify-start py-0 px-0.5 gap-[10px]">
              <div className="flex-1 rounded-3xs bg-darkslateblue h-[33px] flex flex-row items-center justify-between py-0 px-9 box-border">
                <img
                  className="relative w-[25px] h-[21.88px]"
                  alt=""
                  src="/vector.svg"
                />
                <b className="self-stretch flex-1 relative flex items-center justify-center">
                  Chats
                </b>
              </div>
              <div className="self-stretch rounded-3xs bg-tomato flex flex-row items-center justify-center py-0 px-5">
                <img
                  className="relative w-[19.47px] h-[15.63px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
            <div className="rounded-mini w-[259px] flex flex-row items-center justify-start py-0 px-0.5 box-border gap-[10px]">
              <div className="flex-1 rounded-mini bg-darkslategray-100 h-[60px] flex flex-row items-center justify-center py-[15px] px-[26px] box-border">
                <img
                  className="relative w-[21.88px] h-[21.88px]"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
              <div
                className="flex-1 rounded-3xs bg-plum h-[60px] flex flex-row items-center justify-center py-0 px-[21px] box-border cursor-pointer"
                onClick={onFrameContainer6Click}
              >
                <img
                  className="relative w-[32.77px] h-[22.94px]"
                  alt=""
                  src="/vector3.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-mini bg-orangered h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px] overflow-hidden shrink-0"
                alt=""
                src="/useralt.svg"
              />
              <div className="flex-1 relative">{`{Character 1}`}</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px] overflow-hidden shrink-0"
                alt=""
                src="/useralt.svg"
              />
              <div className="flex-1 relative">{`{Character 2}`}</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px] overflow-hidden shrink-0"
                alt=""
                src="/useralt.svg"
              />
              <div className="flex-1 relative">{`{Character 3}`}</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px] overflow-hidden shrink-0"
                alt=""
                src="/useralt1.svg"
              />
              <div className="flex-1 relative">{`{Character 4}`}</div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[1024px] flex flex-col items-center justify-start text-left text-16xl text-darkslategray-200">
          <div className="self-stretch h-[808px] flex flex-col items-end justify-start">
            <div className="self-stretch bg-lightgray h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">{`{Charcter}: Hello!`}</b>
            </div>
            <div className="self-stretch rounded-mini h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">
                You: Hello!
              </b>
            </div>
            <div className="self-stretch bg-lightgray h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">{`{Charcter}: Hello!`}</b>
            </div>
            <div className="self-stretch rounded-mini h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">
                You: Hello!
              </b>
            </div>
            <div className="self-stretch bg-lightgray h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">{`{Charcter}: Hello!`}</b>
            </div>
            <div className="self-stretch rounded-mini h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">
                You: Hello!
              </b>
            </div>
            <div className="self-stretch bg-lightgray h-[124px] flex flex-row items-center justify-start py-2.5 px-[30px] box-border gap-[10px]">
              <img
                className="relative w-[42.5px] h-[42.5px] overflow-hidden shrink-0"
                alt=""
                src="/useralt2.svg"
              />
              <b className="relative inline-block w-[824px] shrink-0">{`{Charcter}: Hello!`}</b>
            </div>
          </div>
          <div className="self-stretch flex-1 bg-blanchedalmond flex flex-row items-center justify-center py-[13px] px-[31px] gap-[31px] text-dimgray">
            <div className="self-stretch flex-1 rounded-mini bg-papayawhip flex flex-row items-start justify-start py-4 px-[22px]">
              <div className="relative inline-block w-[193px] shrink-0">
                input text
              </div>
            </div>
            <img
              className="relative w-[35.99px] h-9"
              alt=""
              src="/vector4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
