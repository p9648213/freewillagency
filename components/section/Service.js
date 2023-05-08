import Image from "next/image";
import { useTranslation } from "next-i18next";

function Service() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center max-sm:flex-col">
        <div className="w-[579px] h-[484px] max-sm:w-auto max-sm:h-auto">
          <Image
            width={579}
            height={484}
            className="w-full h-full"
            src="/assets/passport.webp"
            alt="passport"
          />
        </div>
        <div className="flex flex-col gap-16 items-start max-sm:items-center max-sm:justify-center max-sm:gap-0">
          <div className="max-w-[470px] text-justify ml-14 flex flex-col gap-4 max-sm:ml-0 max-sm:max-w-none max-sm:my-7 max-sm:px-5">
            <div className="text-[32px] w-fit font-bold text-[#0D62F2] relative max-sm:text-[20px]">
              {language === "vi" ? (
                <div>
                  {t("common:service:title")}{" "}
                  <span className="text-[#F44025]">
                    {t("common:service:country")}
                  </span>
                </div>
              ) : (
                t("common:service:country") + " " + t("common:service:title")
              )}
              <div className="absolute top-[13.5px] right-[-130px] w-[110px] border-4 border-[#F44025] max-sm:w-[60px] max-sm:right-[-92px] max-sm:border-4 max-sm:top-2"></div>
            </div>
            <div className="text-[16px] leading-[1.6] tracking-[1px] max-sm:text-[13px]">
              <span className="text-[#F44025] font-bold">Freewill Agency</span>{" "}
              {t("common:service:content")}
            </div>
          </div>
          <div
            className="w-[793px] h-[202px] flex items-center justify-center max-sm:block max-sm:h-auto max-sm:w-full"
            style={{
              backgroundImage:
                "linear-gradient(240deg, rgba(10, 103, 233, 0.7), rgb(10, 103, 233))",
            }}
          >
            <div className="flex-auto flex flex-col justify-center items-center gap-8">
              <div className="text-[18px] font-bold text-white max-sm:hidden">
                FREEWILL AGENCY.,CO LTD
              </div>
              <div className="flex flex-row gap-[90px] max-sm:gap-0 max-sm:grid max-sm:grid-flow-col max-sm:grid-cols-3 max-sm:w-full max-sm:my-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[24px] font-bold text-white">EB5</div>
                  <div className="w-[75px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                      className=""
                      fill="rgba(126, 217, 87, 1)"
                    >
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[24px] font-bold text-white">EB3</div>
                  <div className="w-[75px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                      className=""
                      fill="rgba(126, 217, 87, 1)"
                    >
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[24px] font-bold text-white">L1</div>
                  <div className="w-[75px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                      className=""
                      fill="rgba(126, 217, 87, 1)"
                    >
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[251px] mr-[28px] max-sm:hidden">
              <Image
                className="h-full w-auto"
                width={251}
                height={0}
                src="/assets/visa.webp"
                alt="visa"
              />
            </div>
          </div>
          <div className="h-full w-full hidden max-sm:flex max-sm:my-4 max-sm:justify-center">
            <Image
              className="h-full w-auto"
              width={251}
              height={0}
              src="/assets/visa.webp"
              alt="visa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
