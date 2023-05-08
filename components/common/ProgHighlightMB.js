import Image from "next/image";
import { useTranslation } from "next-i18next";

function ProgHighlightMB({ handleScrolling }) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#022633] relative sm:hidden">
      <div
        className="h-[800px] bg-cover bg-bottom bg-no-repeat opacity-60 w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/program.webp")',
        }}
      ></div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-max flex flex-col justify-center items-center gap-8">
        <div className="w-[130px] h-[100px] bg-white">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
            src="/assets/logo.webp"
            alt="logo"
          />
        </div>

        <div className="text-white font-bold text-[24px] text-center underline whitespace-pre">
          {t("common:program-highlight:title-mb")}
        </div>

        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col justify-center items-center gap-5">
            <div
              className="w-[130px] h-[130px] rounded-full bg-cover bg-center bg-no-repeat border-2 border-white"
              style={{
                backgroundImage: 'url("/assets/program-img1.webp")',
              }}
            ></div>
            <div
              className="text-white text-[13px] w-[160px] font-bold py-3 rounded-full flex items-center justify-center cursor-default"
              style={{ backgroundColor: "rgba(255, 222, 90, 0.7)" }}
            >
              {t("common:program-highlight:program:0")}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div
              className="w-[130px] h-[130px] rounded-full bg-cover bg-center bg-no-repeat border-2 border-white"
              style={{
                backgroundImage: 'url("/assets/program-eb-3.webp")',
                backgroundSize: "160px",
              }}
            ></div>
            <div
              className="text-white text-[13px] w-[160px] font-bold py-3 rounded-full flex items-center justify-center cursor-default"
              style={{ backgroundColor: "rgba(255, 222, 90, 0.7)" }}
            >
              {t("common:program-highlight:program:1")}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 translate-x-[57%]">
            <div
              className="w-[130px] h-[130px] rounded-full bg-cover bg-center bg-no-repeat border-2 border-white"
              style={{
                backgroundImage: 'url("/assets/program-l1.webp")',
                backgroundSize: "160px",
              }}
            ></div>
            <div
              className="text-white text-[13px] w-[160px] font-bold py-3 rounded-full flex items-center justify-center cursor-default"
              style={{ backgroundColor: "rgba(255, 222, 90, 0.7)" }}
            >
              {t("common:program-highlight:program:2")}
            </div>
          </div>
        </div>
        <button
          data-target="consultation"
          className="text-[18px] text-[#004AAD] font-bold px-5 py-3 bg-white rounded-2xl"
          onClick={handleScrolling}
        >
          {t("common:program-highlight:button")}
        </button>
      </div>
    </div>
  );
}

export default ProgHighlightMB;
