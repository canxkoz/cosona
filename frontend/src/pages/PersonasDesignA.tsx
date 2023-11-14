import { FunctionComponent, useCallback } from "react";

const PersonasDesignA: FunctionComponent = () => {
  const onFrameContainer4Click = useCallback(() => {
    // Please sync "Chat Design A" to the project
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
                src="/vector-traced.svg"
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
            <div className="self-stretch rounded-mini flex flex-row items-center justify-start">
              <div className="flex-1 rounded-3xs bg-plum h-[33px] flex flex-row items-center justify-between py-0 px-[13px] box-border">
                <img
                  className="relative w-[32.77px] h-[22.94px]"
                  alt=""
                  src="/vector.svg"
                />
                <b className="self-stretch flex-1 relative flex items-center justify-center">
                  Co:Sonas
                </b>
              </div>
            </div>
            <div className="rounded-mini w-[259px] flex flex-row items-center justify-start py-0 px-0.5 box-border gap-[10px]">
              <div className="flex-1 rounded-mini bg-darkslategray-100 h-[60px] flex flex-row items-center justify-center py-[15px] px-[26px] box-border">
                <img
                  className="relative w-[21.88px] h-[21.88px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div
                className="flex-1 rounded-3xs bg-darkslateblue h-[60px] flex flex-row items-center justify-center py-0 px-[21px] box-border cursor-pointer"
                onClick={onFrameContainer4Click}
              >
                <img
                  className="relative w-[25px] h-[21.88px]"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-mini bg-orangered h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px] overflow-hidden shrink-0"
                alt=""
                src="/useralt.svg"
              />
              <div className="flex-1 relative">My Co:Sonas</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px]"
                alt=""
                src="/vector3.svg"
              />
              <div className="flex-1 relative">Star Wars</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[25.92px]"
                alt=""
                src="/image-1-traced.svg"
              />
              <div className="flex-1 relative">Naruto</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[35.39px]"
                alt=""
                src="/vector4.svg"
              />
              <div className="flex-1 relative">Marvel</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[30.44px]"
                alt=""
                src="/image-3-traced.svg"
              />
              <div className="flex-1 relative">Harry Potter</div>
            </div>
            <div className="self-stretch rounded-mini bg-tomato h-[60px] flex flex-row items-center justify-center py-[15px] px-[18px] box-border gap-[10px]">
              <img
                className="relative w-[30.44px] h-[24.35px]"
                alt=""
                src="/vector5.svg"
              />
              <div className="flex-1 relative">Miscellaneous</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-y-auto flex flex-col items-center justify-center text-darkslategray-200">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start py-[55px] px-0 gap-[43px]">
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="relative w-[138px] h-[138px]"
                        alt=""
                        src="/characterimg.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">
                        Your Own Character
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslategray-100 flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Create!
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center bg-[url('/public/frame-41@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[138px] h-[138px] hidden"
                        alt=""
                        src="/characterimg1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">Sasuke</b>
                      <div className="flex flex-row items-center justify-center text-left text-xl">
                        <div className="relative">{`{Series}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslateblue flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Chat Now
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center bg-[url('/public/frame-411@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[138px] h-[138px] hidden"
                        alt=""
                        src="/characterimg1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">{`Harry Potter `}</b>
                      <div className="flex flex-row items-center justify-center text-left text-xl">
                        <div className="relative">{`{Series}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslateblue flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Chat Now
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center bg-[url('/public/frame-412@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[138px] h-[138px] hidden"
                        alt=""
                        src="/characterimg1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">Sherlock Holmes</b>
                      <div className="flex flex-row items-center justify-center text-left text-xl">
                        <div className="relative">{`{Series}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslateblue flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Chat Now
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center bg-[url('/public/frame-413@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[138px] h-[138px] hidden"
                        alt=""
                        src="/characterimg1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">Master Yoda</b>
                      <div className="flex flex-row items-center justify-center text-left text-xl">
                        <div className="relative">{`{Series}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslateblue flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Chat Now
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center bg-[url('/public/frame-414@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[138px] h-[138px] hidden"
                        alt=""
                        src="/characterimg1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">Tony Stark</b>
                      <div className="flex flex-row items-center justify-center text-left text-xl">
                        <div className="relative">{`{Series}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslateblue flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Chat Now
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-lightgray w-[300px] h-[394px] flex flex-col items-center justify-center pt-[87px] px-[50px] pb-[50px] box-border">
                <div className="w-[232px] flex flex-col items-center justify-center py-0 px-px box-border gap-[21px]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[21px]">
                    <div className="flex flex-col items-center justify-center bg-[url('/public/frame-415@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <img
                        className="relative w-[138px] h-[138px] hidden"
                        alt=""
                        src="/characterimg1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <b className="self-stretch relative">Rick Sanchez</b>
                      <div className="flex flex-row items-center justify-center text-left text-xl">
                        <div className="relative">{`{Series}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-darkslateblue flex flex-col items-center justify-start py-1 px-0 text-16xl text-gainsboro">
                    <b className="self-stretch relative inline-block h-[37px] shrink-0">
                      Chat Now
                    </b>
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
