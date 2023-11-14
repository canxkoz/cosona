import { FunctionComponent, useCallback } from "react";

const Landing: FunctionComponent = () => {
  const onPersonaBtnContainerClick = useCallback(() => {
    // Please sync "Personas Design A" to the project
  }, []);

  const onChatBtnContainerClick = useCallback(() => {
    // Please sync "Chat Design A" to the project
  }, []);

  const onCreateBtnContainerClick = useCallback(() => {
    // Please sync "Chat Design A" to the project
  }, []);

  return (
    <div className="relative bg-linen w-full h-[1024px] overflow-hidden flex flex-col items-start justify-start gap-[69px] text-center text-21xl text-white font-consolas">
      <div className="self-stretch bg-gray flex flex-row items-center justify-center py-2.5 px-0">
        <div className="flex flex-row items-center justify-start py-0 px-[30px]">
          <div className="w-[100.5px] h-[113.19px] flex flex-row items-center justify-start py-2.5 px-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-traced.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center py-0 px-[30px]">
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div
              className="rounded-mini bg-plum flex flex-row items-center justify-center py-2.5 px-[30px] gap-[10px] cursor-pointer"
              onClick={onPersonaBtnContainerClick}
            >
              <img
                className="relative w-[32.77px] h-[22.94px]"
                alt=""
                src="/vector.svg"
              />
              <div className="relative">Personas</div>
            </div>
            <div
              className="rounded-mini bg-darkslateblue flex flex-row items-center justify-center py-2.5 px-[30px] gap-[10px] cursor-pointer"
              onClick={onChatBtnContainerClick}
            >
              <img
                className="relative w-[25px] h-[21.88px]"
                alt=""
                src="/vector1.svg"
              />
              <div className="relative">Chats</div>
            </div>
            <div
              className="rounded-mini bg-darkslategray flex flex-row items-center justify-center py-2.5 px-[30px] gap-[10px] cursor-pointer"
              onClick={onCreateBtnContainerClick}
            >
              <img
                className="relative w-[21.88px] h-[21.88px]"
                alt=""
                src="/vector2.svg"
              />
              <div className="relative">Create</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[513.26px] flex flex-col items-start justify-center py-1 px-[113px] box-border gap-[24px] text-left text-black">
        <div className="flex flex-col items-start justify-center py-0 px-[15px] text-[128px] font-nunito-sans">
          <b className="relative inline-block w-[698px] h-[158px] shrink-0 [transform:_rotate(0.19deg)] [transform-origin:0_0]">
            <p className="m-0">Co:Sona</p>
          </b>
          <img
            className="relative w-[218px] h-[36.59px]"
            alt=""
            src="/cohere-logo.svg"
          />
        </div>
        <div className="rounded-mini bg-coral flex flex-row items-center justify-center py-[27px] px-[30px]">
          <div className="relative">
            <p className="m-0">{`Bring characters from {insert}`}</p>
            <p className="m-0">to life</p>
          </div>
        </div>
        <div className="rounded-mini bg-darkslateblue flex flex-row items-center justify-center py-2.5 px-[30px] text-center text-white">
          <div className="relative">Get Chatting</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
