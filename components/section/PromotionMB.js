import { useTranslation } from "next-i18next";

function PromotionMB() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="hidden max-sm:flex max-sm:flex-col">
      <div className="h-[380px] w-full">
        <div className="relative w-full h-full">
          <div
            className="w-[220px] h-[300px] bg-cover bg-no-repeat absolute left-5 top-20"
            style={{
              backgroundImage: 'url("/assets/pr-img1.webp")',
            }}
          ></div>
          <div
            className="w-[220px] h-[300px] bg-cover bg-no-repeat absolute top-8 right-5"
            style={{
              backgroundImage: 'url("/assets/pr-img2.webp")',
            }}
          ></div>
          <div className="w-[80px] h-[80px] absolute top-[65px] left-[5px]">
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
          <div className="w-[80px] h-[80px] absolute top-[17px] right-[175px]">
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
        </div>
      </div>

      <div className="my-7">
        <div className="flex justify-center items-center gap-[5px] ml-3">
          <div className="text-[#F44025] text-[25px] font-bold">
            {t("common:promotion:discount")}
          </div>
          <div className="relative flex">
            <div className="w-[50px] h-[50px]">
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
            <div className="w-[50px] h-[50px] absolute top-1 left-[-3px]">
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
            <div className="w-[50px] h-[50px] translate-x-[-7px]">
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
            <div className="w-[50px] h-[50px] translate-x-[-12px]">
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
            <div className="h-[30px] w-[30px] rotate-[23deg] absolute top-[-18px] right-[13px]">
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
          </div>
        </div>
      </div>

      <div className="p-5 leading-[1.6] tracking-[1px] bg-white text-[#051F4D] flex flex-col gap-4 relative">
        <div className="w-[95px] border-solid border-t-2 border-[#F2430D] absolute top-[2px] left-[21px]"></div>
        <div className="text-[23px] font-bold text-[#004AAD]">
          {t("common:promotion:title")}
        </div>
        <div className="text-[15px] text-justify">
          {t("common:promotion:intro:part-1")}
        </div>
        <div className="text-[15px] text-justify">
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
        <div className="text-[15px] ">
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
                <div className="w-[18.78px]">
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
                </div>
              )}
              {t("common:promotion:body:part-2:3")}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-4 mt-2">
        <div className="rounded-full w-[154px] h-[154px] bg-[#F8C519]">
          <div
            className="w-[150px] h-[150px] rounded-full bg-cover bg-no-repeat border-1 border-[#0D62F2]"
            style={{
              backgroundImage: 'url("/assets/pr-img3.webp")',
            }}
          ></div>
        </div>

        <div className="rounded-full w-[154px] h-[154px] bg-[#F8C519]">
          <div
            className="w-[150px] h-[150px] rounded-full bg-cover bg-top bg-no-repeat border-1 border-[#0D62F2] translate-x-[1px]"
            style={{
              backgroundImage: 'url("/assets/pr-img4.webp")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default PromotionMB;
