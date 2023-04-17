import { useTranslation } from "next-i18next";

function Promotion() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="mt-9 mx-[160px] h-[751px] min-w-[1180px] justify-center items-center flex">
      <div className="relative h-full w-full max-w-[1216px]">
        <div
          className="w-[372px] h-[536px] bg-cover bg-no-repeat absolute top-[120px] left-[-40px]"
          style={{
            backgroundImage: 'url("/assets/pr-img1.webp")',
          }}
        ></div>

        <div
          className="w-[456px] h-[558px] bg-cover bg-no-repeat absolute top-[18px] left-[150px]"
          style={{
            backgroundImage: 'url("/assets/pr-img2.webp")',
          }}
        ></div>

        <div className="w-[570px] p-8 leading-[1.6] tracking-[1px] bg-white text-[#051F4D] flex flex-col gap-4 absolute top-[132px] right-[130px]">
          <div className="text-[32px] font-bold text-[#004AAD]">
            {t("common:promotion:title")}
          </div>
          <div className="text-[17px]">
            {t("common:promotion:intro:part-1")}
          </div>
          <div className="text-[17px]">
            {t("common:promotion:intro:part-2:0")}{" "}
            <span
              className={`font-bold ${
                language === "vi" ? "text-[#EEC10A] " : "text-[#F44025]"
              }`}
            >
              {t("common:promotion:intro:part-2:1")}
            </span>{" "}
            {t("common:promotion:intro:part-2:2")}
          </div>
          <div className="text-[18px]">
            <div>{t("common:promotion:body:part-1")}</div>
            <div>
              <div className="flex gap-2 items-center">
                {language === "vi" && (
                  <div className="w-[18.78px] h-[18.78px]">
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
                )}
                {t("common:promotion:body:part-2:0")}
              </div>
              <div className="flex gap-2 items-center">
                {language === "vi" && (
                  <div className="w-[18.78px] h-[18.78px]">
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
                )}
                {t("common:promotion:body:part-2:1")}
              </div>
              <div className="flex gap-2 items-center">
                {language === "vi" && (
                  <div className="w-[18.78px] h-[18.78px]">
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
                )}
                {t("common:promotion:body:part-2:2")}
              </div>
              <div className="flex gap-2 items-center">
                {language === "vi" && (
                  <div className="w-[18.78px] h-[18.78px]">
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
                )}
                {t("common:promotion:body:part-2:3")}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-[30px] ${
            language === "vi" ? "right-[120px]" : "right-[190px]"
          }`}
        >
          <div className="text-[#F44025] text-[56px] font-bold">
            {t("common:promotion:discount")}
          </div>
        </div>

        <div
          className={`w-[65px] h-[65px] absolute top-[43px] ${
            language === "vi" ? "right-[30px]" : "right-[102px]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            className=""
            fill="rgba(7, 58, 145, 1.0)"
          >
            {" "}
            <path d="M14,17H12V9H10V7H14M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"></path>{" "}
          </svg>
        </div>

        <div
          className={`w-[63px] h-[63px] absolute top-[50px] ${
            language === "vi" ? "right-[37px]" : "right-[110px]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 96 960 960"
            width="100%"
            preserveAspectRatio="none"
            className=""
            fill="rgba(7, 58, 145, 1.0)"
          >
            <path d="M 428 718 Z Z M 140 976 q -24 0 -42 -18 t -18 -42 V 296 h 60 v 620 h 620 v 60 H 140 Z"></path>
          </svg>
        </div>

        <div
          className={`w-[67px] h-[67px] absolute top-[42px] ${
            language === "vi" ? "right-[-25px]" : "right-[47px]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            className=""
            fill="rgba(7, 58, 145, 1.0)"
          >
            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z"></path>
          </svg>
        </div>

        <div
          className={`w-[63px] h-[63px] absolute top-[45px] ${
            language === "vi" ? "right-[-80px]" : "right-[-10px]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            className=""
            fill="rgba(7, 58, 145, 1.0)"
          >
            <path d="M7,4A3,3 0 0,1 10,7A3,3 0 0,1 7,10A3,3 0 0,1 4,7A3,3 0 0,1 7,4M17,14A3,3 0 0,1 20,17A3,3 0 0,1 17,20A3,3 0 0,1 14,17A3,3 0 0,1 17,14M20,5.41L5.41,20L4,18.59L18.59,4L20,5.41Z"></path>
          </svg>
        </div>

        <div className="w-[80px] h-[80px] absolute top-[105px] left-[-55px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 105.42 105.42"
            className=""
            fill="rgba(19, 189, 195, 1.0)"
          >
            <polygon points="105.42 9.92 105.42 0 0 0 0 105.42 9.92 105.42 9.92 9.92 105.42 9.92"></polygon>
          </svg>
        </div>

        <div className="w-[80px] h-[80px] absolute top-[3px] left-[136px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 105.42 105.42"
            className=""
            fill="rgba(19, 189, 195, 1.0)"
          >
            <polygon points="105.42 9.92 105.42 0 0 0 0 105.42 9.92 105.42 9.92 9.92 105.42 9.92"></polygon>
          </svg>
        </div>

        <div
          className={`h-[34px] w-[34px] rotate-[23deg] absolute top-[30px] ${
            language === "vi" ? "right-[-97px]" : "right-[-27px]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 185.66 193.77"
            className=""
            fill="rgba(255, 222, 89, 1)"
          >
            <path d="M185.66,89.41C119,109.87,107.29,123.05,92.83,193.77,78.37,125.38,66.65,114.08,0,104.36,66.65,83.9,78.37,70.72,92.83,0,107.29,68.4,119,79.69,185.66,89.41Z"></path>
          </svg>
        </div>

        <div className="rounded-full w-[186px] h-[178px] bg-[#F8C519] absolute bottom-[20px] right-[40px]">
          <div
            className="w-[178px] h-[178px] rounded-full bg-cover bg-no-repeat border-2 border-[#0D62F2]"
            style={{
              backgroundImage: 'url("/assets/pr-img3.webp")',
            }}
          ></div>
        </div>

        <div className="rounded-full w-[186px] h-[185px] bg-[#F8C519] absolute bottom-[200px] right-[-45px]">
          <div
            className="w-[178px] h-[178px] rounded-full bg-cover bg-top bg-no-repeat border-2 border-[#0D62F2] translate-x-[1px]"
            style={{
              backgroundImage: 'url("/assets/pr-img4.webp")',
            }}
          ></div>
        </div>

        <div className="w-[95px] border-solid border-t-2 border-[#F2430D] absolute top-[155px] right-[575px]"></div>
      </div>
    </div>
  );
}

export default Promotion;
