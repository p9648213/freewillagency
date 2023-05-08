import Image from "next/image";
import { useTranslation } from "next-i18next";

function ProgHighlight({ handleScrolling }) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#022633] relative max-sm:hidden">
      <div
        className="h-[691px] bg-cover bg-bottom bg-no-repeat opacity-60 w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/program.webp")',
        }}
      ></div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-max flex flex-col items-center gap-16">
        <div className="w-[174px] h-[89px] absolute top-[-30px] left-[-280px] bg-white">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="absolute translate-y-[-41px] w-auto h-auto"
            src="/assets/logo.webp"
            alt="logo"
          />
        </div>
        <div className="text-white font-bold text-[34px] w-[813px] text-center underline whitespace-pre">
          {t("common:program-highlight:title")}
        </div>
        <div className="flex gap-[157px]">
          <div className="flex flex-col justify-center items-center gap-7">
            <div
              className="w-[163px] h-[163px] rounded-full bg-cover bg-center bg-no-repeat border-2 border-white"
              style={{
                backgroundImage: 'url("/assets/program-img1.webp")',
              }}
            ></div>
            <div
              className="text-white text-[14px] w-[173px] font-bold py-3 rounded-full flex items-center justify-center cursor-default"
              style={{ backgroundColor: "rgba(255, 222, 90, 0.7)" }}
            >
              {t("common:program-highlight:program:0")}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-7">
            <div
              className="w-[163px] h-[163px] rounded-full bg-cover bg-center bg-no-repeat border-2 border-white"
              style={{
                backgroundImage: 'url("/assets/program-eb-3.webp")',
                backgroundSize: "160px",
              }}
            ></div>
            <div
              className="text-white text-[14px] w-[173px] font-bold py-3 rounded-full flex items-center justify-center cursor-default"
              style={{ backgroundColor: "rgba(255, 222, 90, 0.7)" }}
            >
              {t("common:program-highlight:program:1")}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-7">
            <div
              className="w-[163px] h-[163px] rounded-full bg-cover bg-center bg-no-repeat border-2 border-white"
              style={{
                backgroundImage: 'url("/assets/program-l1.webp")',
                backgroundSize: "160px",
              }}
            ></div>
            <div
              className="text-white text-[14px] w-[173px] font-bold py-3 rounded-full flex items-center justify-center cursor-default"
              style={{ backgroundColor: "rgba(255, 222, 90, 0.7)" }}
            >
              {t("common:program-highlight:program:2")}
            </div>
          </div>
        </div>
        <button
          data-target="consultation"
          className="text-[18px] text-[#004AAD] font-bold mt-10 px-6 py-4 bg-white rounded-2xl"
          onClick={handleScrolling}
        >
          {t("common:program-highlight:button")}
        </button>
      </div>
    </div>
  );
}

export default ProgHighlight;
