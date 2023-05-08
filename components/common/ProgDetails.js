import Image from "next/image";
import { useTranslation } from "next-i18next";

function ProgDetails({ handleScrolling }) {
  const { t } = useTranslation();

  return (
    <div className="mt-1 bg-[#013C52] p-4 h-[242px] flex justify-center items-center max-sm:hidden">
      <div className="flex">
        <div className="w-[391px] h-[214px] border-4 border-white translate-x-[-30px] mr-3 relative">
          <Image
            className="w-full h-full"
            width={391}
            height={214}
            src="/assets/prog-detail-img1.webp"
            alt="visa"
          />
          <div className="absolute h-[100px] w-[27px] bg-[#ADFFFD] top-[10px] right-[-26.5px]"></div>
        </div>
        <div className="flex-[4] flex flex-col gap-4 translate-y-[25px]">
          <div className="leading-[1.6] flex flex-col">
            <div className="text-[#FFBE27] text-[18px] font-bold">
              {t("common:program-banner:title")}{" "}
              <span className="text-[#ADFFFD]">FREEWILL AGENCY</span>
            </div>
            <div className="text-[15px] text-white text-justify pr-4">
              {t("common:program-banner:body")}
            </div>
          </div>
          <div className="text-[19px] text-white font-bold">
            {t("common:program-banner:slogan")}
          </div>
        </div>
        <div className="flex-[3] flex justify-center items-center gap-8 mx-7">
          <div>
            <div className="flex flex-col justify-center items-center gap-6">
              <button
                data-target="consultation"
                className="bg-[#FFBE27] text-[14px] font-bold leading-[1.6] py-2 px-12 rounded-full"
                onClick={handleScrolling}
              >
                {t("common:program-banner:button")}
              </button>
              <div className="w-[210px] h-[123px] border-[6px] border-white">
                <Image
                  className="h-full w-full"
                  width={210}
                  height={123}
                  src="/assets/prog-detail-img2.webp"
                  alt="australia visa"
                />
              </div>
            </div>
          </div>
          <div className="w-[200px] h-[155px] border-[6px] border-white">
            <Image
              className="h-full w-full"
              width={200}
              height={155}
              src="/assets/prog-detail-img3.webp"
              alt="australia visa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgDetails;
