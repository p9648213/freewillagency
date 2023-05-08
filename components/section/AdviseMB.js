import { useTranslation } from "next-i18next";

function AdviseMB() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center flex-col sm:hidden pb-7">
      <div className="text-[#0E7196] text-[24px] font-bold text-center px-3 py-6">
        {t("common:advise:article-1:title")}
      </div>

      <div
        className="w-full bg-repeat bg-top bg-cover flex justify-center items-center"
        style={{
          backgroundImage: 'url("/assets/advise-img1.webp")',
        }}
      >
        <div
          className="h-full w-full text-[16px] text-white font-[750]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74, 159, 191, 0.8), rgba(1, 60, 82, 0.8))",
          }}
        >
          <div className="flex flex-col justify-start items-center h-full p-7 text-justify leading-[1.8] tracking-[0] gap-6">
            <div>
              <span className="text-[#FFDE59]">Freewill Agency</span>{" "}
              {t("common:advise:article-1:body:0")}{" "}
            </div>
            <div>{t("common:advise:article-1:body:1")}</div>
          </div>
        </div>
      </div>

      <div
        className="h-[250px] w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/advise-img1.webp")',
        }}
      ></div>

      <div className="mt-4 flex flex-col gap-3 text-justify px-6">
        <div className="text-[#038387] text-[20px] font-bold leading-[1.2]">
          {t("common:advise:article-2:title")}
        </div>
        <div className="text-[16px] leading-[1.6]">
          {t("common:advise:article-2:body")}
        </div>
      </div>
    </div>
  );
}

export default AdviseMB;
