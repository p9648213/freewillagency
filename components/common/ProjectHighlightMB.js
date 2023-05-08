import Image from "next/image";
import { useTranslation } from "next-i18next";

function ProjectHighlightMB({ handleScrolling }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div
      className="sm:hidden py-10"
      style={{
        background: "linear-gradient(rgb(7, 58, 145), rgb(40, 162, 160))",
      }}
    >
      <div className="h-full w-full flex flex-col justify-center items-center gap-6">
        <div className="text-white text-[24px] font-bold underline whitespace-normal text-center px-2">
          {t("common:projecthighlight:title:0")}{" "}
          <span className="text-[#7ED957]">
            {t("common:projecthighlight:title:1")}
          </span>{" "}
          {t("common:projecthighlight:title:2")}
        </div>
        <div className="text-[26px] text-[#FFDE59] font-bold">
          {t("common:projecthighlight:title:3")}
        </div>

        <div className="w-full h-auto px-4">
          <Image
            src={`/assets/${
              language === "en"
                ? "projecthighlight-img1.webp"
                : "projecthighlight-img4.webp"
            }`}
            width={940}
            height={788}
            alt="projecthightlight"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col gap-5 text-[15px] text-white text-justify relative">
            <div
              className="absolute w-full top-[-3px] bottom-[-3px] left-[0]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(13, 98, 242, 0.3), rgb(7, 58, 145))",
              }}
            ></div>
            <div className="text-[20px] text-justify text-white font-bold z-10 leading-[1.3] px-3">
              {t("common:projecthighlight:article:title:0")}{" "}
              <span className="text-[#F0C519]">
                {t("common:projecthighlight:article:title:1")}
              </span>{" "}
              {t("common:projecthighlight:article:title:2")}
            </div>
          </div>

          <div className="text-[14px] text-white px-4 text-justify">
            <span className="text-[#7ED957] font-bold">
              {t("common:projecthighlight:article:intro:0")}
            </span>{" "}
            {t("common:projecthighlight:article:intro:1")}{" "}
            <span className="text-[#ADFFFD]">
              {t("common:projecthighlight:article:intro:2")}
            </span>{" "}
            {t("common:projecthighlight:article:intro:3")}
          </div>

          <div className="flex flex-col gap-3 w-full text-white px-4 text-justify">
            <div className="flex gap-2">
              <div className="w-[18px] h-[18px] flex-shrink-0 translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 205.6 205.6"
                  className=""
                  fill="rgba(126, 217, 87, 1)"
                >
                  <path
                    d="M58.6,143.6a17.8,17.8,0,0,1-25.2,0h0L5.2,115.4a17.8,17.8,0,0,1,0-25.2h0L33.4,62a17.8,17.8,0,0,1,25.2,0h0L86.8,90.2a17.8,17.8,0,0,1,0,25.2h0ZM90.2,86.8a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0L115.4,5.2a17.8,17.8,0,0,0-25.2,0h0L62,33.4a17.8,17.8,0,0,0,0,25.2h0Zm25.2,32a17.8,17.8,0,0,0-25.2,0h0L62,147a17.8,17.8,0,0,0,0,25.2h0l28.2,28.2a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0Zm85-28.6L172.2,62A17.8,17.8,0,0,0,147,62h0L118.8,90.2a17.8,17.8,0,0,0,0,25.2h0L147,143.6a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2Z"
                    transform="translate(0)"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="font-bold">
                  {t("common:projecthighlight:article:body:content-1:0")}
                </span>{" "}
                {t("common:projecthighlight:article:body:content-1:1")}
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-[18px] h-[18px] flex-shrink-0 translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 205.6 205.6"
                  className=""
                  fill="rgba(126, 217, 87, 1)"
                >
                  <path
                    d="M58.6,143.6a17.8,17.8,0,0,1-25.2,0h0L5.2,115.4a17.8,17.8,0,0,1,0-25.2h0L33.4,62a17.8,17.8,0,0,1,25.2,0h0L86.8,90.2a17.8,17.8,0,0,1,0,25.2h0ZM90.2,86.8a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0L115.4,5.2a17.8,17.8,0,0,0-25.2,0h0L62,33.4a17.8,17.8,0,0,0,0,25.2h0Zm25.2,32a17.8,17.8,0,0,0-25.2,0h0L62,147a17.8,17.8,0,0,0,0,25.2h0l28.2,28.2a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0Zm85-28.6L172.2,62A17.8,17.8,0,0,0,147,62h0L118.8,90.2a17.8,17.8,0,0,0,0,25.2h0L147,143.6a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2Z"
                    transform="translate(0)"
                  ></path>
                </svg>
              </div>
              <div>
                <span className="font-bold">
                  {t("common:projecthighlight:article:body:content-2:0")}
                </span>{" "}
                {t("common:projecthighlight:article:body:content-2:1")}
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-[18px] h-[18px] flex-shrink-0 translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 205.6 205.6"
                  className=""
                  fill="rgba(126, 217, 87, 1)"
                >
                  <path
                    d="M58.6,143.6a17.8,17.8,0,0,1-25.2,0h0L5.2,115.4a17.8,17.8,0,0,1,0-25.2h0L33.4,62a17.8,17.8,0,0,1,25.2,0h0L86.8,90.2a17.8,17.8,0,0,1,0,25.2h0ZM90.2,86.8a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0L115.4,5.2a17.8,17.8,0,0,0-25.2,0h0L62,33.4a17.8,17.8,0,0,0,0,25.2h0Zm25.2,32a17.8,17.8,0,0,0-25.2,0h0L62,147a17.8,17.8,0,0,0,0,25.2h0l28.2,28.2a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0Zm85-28.6L172.2,62A17.8,17.8,0,0,0,147,62h0L118.8,90.2a17.8,17.8,0,0,0,0,25.2h0L147,143.6a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2Z"
                    transform="translate(0)"
                  ></path>
                </svg>
              </div>
              <div>
                {t("common:projecthighlight:article:body:content-3:0")}{" "}
                <span className="font-bold">
                  {t("common:projecthighlight:article:body:content-3:1")}
                </span>{" "}
                {t("common:projecthighlight:article:body:content-3:2")}
              </div>
            </div>

            <div>
              {t("common:projecthighlight:article:end:0")}{" "}
              <span className="text-[#ADFFFD]">
                {t("common:projecthighlight:article:end:1")}
              </span>{" "}
              {t("common:projecthighlight:article:end:2")}
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <button
              className="bg-white text-[#28A2A0] text-[14px] font-bold py-[14px] px-[12px] rounded-2xl"
              style={{ boxShadow: "rgb(238, 193, 10) 0px 0px 33px -15px" }}
              data-target="consultation"
              onClick={handleScrolling}
            >
              {t("common:projecthighlight:button")}
            </button>
            <div className="flex gap-2">
              <div className="w-[89px] h-[45px]">
                <Image
                  alt="hyattplace"
                  width={692}
                  height={350}
                  src="/assets/projecthighlight-img2.webp"
                />
              </div>
              <div className="font-bold text-[30px] text-white">X</div>
              <div className="w-[61px] h-[45px]">
                <Image
                  alt="freewillagency"
                  className="w-full h-full"
                  width={400}
                  height={400}
                  src="/assets/projecthighlight-img3.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHighlightMB;
