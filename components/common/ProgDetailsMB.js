import Image from "next/image";
import { useTranslation } from "next-i18next";

function ProgDetailsMB({ handleScrolling }) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#013C52] p-4 flex flex-col justify-center items-center sm:hidden gap-6">
      <div className="w-[300px] h-auto border-4 border-white mr-3 relative">
        <Image
          className="w-full h-full"
          width={391}
          height={214}
          src="/assets/prog-detail-img1.webp"
          alt="visa"
        />
        <div className="absolute h-[100px] w-[27px] bg-[#ADFFFD] top-[10px] right-[-26.5px]"></div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="leading-[1.6] flex flex-col">
          <div className="text-[#FFBE27] text-[16px] font-bold pb-1">
            {t("common:program-banner:title")}{" "}
            <span className="text-[#ADFFFD]">FREEWILL AGENCY</span>
          </div>
          <div className="text-[15px] text-white text-justify">
            {t("common:program-banner:body")}
          </div>
        </div>
        <div className="text-[19px] text-white font-bold">
          {t("common:program-banner:slogan")}
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 h-auto border-[6px] border-white">
          <Image
            className="h-full w-full"
            width={210}
            height={123}
            src="/assets/prog-detail-img2.webp"
            alt="australia visa"
          />
        </div>

        <div className="flex-1 h-auto border-[6px] border-white">
          <Image
            className="h-full w-full"
            width={200}
            height={155}
            src="/assets/prog-detail-img3.webp"
            alt="australia visa"
          />
        </div>
      </div>

      <button
        data-target="consultation"
        className="bg-[#FFBE27] text-[14px] font-bold leading-[1.6] py-2 px-12 rounded-full"
        onClick={handleScrolling}
      >
        {t("common:program-banner:button")}
      </button>
    </div>
  );
}

export default ProgDetailsMB;
