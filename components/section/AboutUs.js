import { useTranslation } from "next-i18next";
import Image from "next/image";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        style={{
          background: "linear-gradient(rgb(173, 255, 253), rgb(12, 108, 144))",
        }}
        id="about-us"
      >
        <div className="flex justify-center translate-x-[-20px]">
          <div className="w-[300px] relative">
            <div
              className="w-[150px] h-[150px] bg-contain bg-white rounded-full absolute top-[28px] right-[60px]"
              style={{
                backgroundImage: "url('/assets/logo.webp')",
              }}
            ></div>
          </div>
          <div className="flex-[6] px-8 py-14 w-[600px]">
            <div className="flex flex-col gap-6 text-justify tracking-wide leading-[1.5] relative">
              <div className="text-[35px] text-[#018489] font-bold z-10 font-sans">
                {t("common:about:title")}
              </div>
              <div className="text-[19px]">
                <span className="font-bold text-[#018489]">
                  Freewill Agency
                </span>{" "}
                {t("common:about:intro")}
              </div>
              <div className="text-[19px] whitespace-pre-line">
                {t("common:about:body")}
              </div>
              <div className="w-[44.4px] h-[44.4px] bg-[#FFDE59] rounded-full absolute top-[-8px] left-[-31px]"></div>
            </div>
          </div>
          <div className="py-14">
            <div className="w-[422px] h-[422px] border-[#0E8387] border-2 rounded-full ml-14 relative">
              <div
                className="w-[380px] h-[380px] rounded-full bg-white bg-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
                style={{
                  backgroundImage: "url('/assets/logo.webp')",
                }}
              ></div>
              <div className="text-[#0E7196] text-[18px] font-bold absolute bottom-[100px] left-[78px] z-20">
                FREEWILL AGENCY.,CO LTD
              </div>
              <div
                className="w-[65px] h-[65px] bg-gradient-to-b from-[#004AAD] to-[#32AEAB] right-[60px]
          bottom-[10px] absolute rounded-full z-20"
              ></div>
              <div
                className="w-[139px] h-[139px] bg-gradient-to-b from-[#004AAD] to-[#32AEAB] top-[-7px]
          left-[-7px] absolute rounded-full"
              ></div>
              <div className="w-[21px] h-[21px] bottom-[70px] left-[24px] absolute rounded-full border-2 border-[#FFDE59]"></div>
              <div className="w-[20px] h-[20px] top-0 right-[70px] absolute border-2 border-[#FFBE27] origin-center rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center pb-16"
        style={{
          background: "linear-gradient(rgb(12, 108, 144), rgb(109, 213, 237))",
        }}
      >
        <div className="relative">
          <div className="w-[579px] h-[714px] overflow-hidden ">
            <Image
              src="/assets/about-img1.webp"
              width={1790}
              height={1268}
              alt="about-img1"
              className="h-full w-full scale-y-[1.3] scale-x-[2.2]"
              style={{ objectPosition: "110px" }}
            />
            <div className="absolute top-[-5px] left-[-5px] w-[79px] h-[62px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 105.42 105.42"
                className=""
                fill="rgba(255, 255, 255, 1)"
              >
                <polygon points="105.42 9.92 105.42 0 0 0 0 105.42 9.92 105.42 9.92 9.92 105.42 9.92"></polygon>
              </svg>
            </div>
            <div className="absolute bottom-[-7px] right-[-7px] w-[79px] h-[62px] rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 105.42 105.42"
                className=""
                fill="rgba(255, 255, 255, 1)"
              >
                <polygon points="105.42 9.92 105.42 0 0 0 0 105.42 9.92 105.42 9.92 9.92 105.42 9.92"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[750px] justify-center flex flex-col gap-28 relative z-10">
          <div className="pl-12 w-[630px] flex flex-col gap-5">
            <div className="text-[#ADFFFD] text-[38px] font-bold leading-[1.2] flex items-center gap-12">
              <div className="z-20">{t("common:about:vision:title")}</div>
              <div className="w-[111px] h-[8px] bg-[#FFDE59]"></div>
            </div>
            <div className="text-white text-[28px] leading-[1.4] text-justify">
              {t("common:about:vision:content")}
            </div>
          </div>

          <div
            className="h-[262px] flex gap-7 justify-center items-center pl-10"
            style={{
              background:
                "linear-gradient(240deg, rgba(10, 103, 233, 0.7), rgb(10, 103, 233))",
            }}
          >
            <div className="flex flex-col gap-3">
              <div className="text-[#ADFFFD] text-right text-[35px] font-bold leading-[1.2] flex justify-end items-end gap-5">
                <div className="w-[111px] h-[8px] bg-[#FFDE59] mb-2"></div>
                <div>{t("common:about:mission:title")}</div>
              </div>
              <div className="text-white text-[18px] leading-[1.4] text-justify">
                {t("common:about:mission:content")}
              </div>
            </div>

            <div className="h-full">
              <div className="w-[320px] h-full overflow-hidden">
                <Image
                  src="/assets/about-img2.webp"
                  width={1804}
                  height={1194}
                  alt="about-img2"
                  className="h-full scale-[1.8]"
                />
              </div>
            </div>
          </div>

          <div className="w-[32px] h-[32px] bg-[#FFDE59] rounded-full absolute top-[-2px] left-[25px]"></div>
          <div className="w-[159px] h-[20px] bg-[#FFDE59] absolute right-[70px] top-[165px]"></div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
