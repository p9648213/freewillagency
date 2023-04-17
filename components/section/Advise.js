import { useTranslation } from "next-i18next";

function Advise() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center flex-col my-10">
      <div className="flex flex-col gap-10">
        <div className="flex">
          <div className="text-[#0E7196] text-[36px] font-bold">
            {t("common:advise:article-1:title")}
          </div>
        </div>

        <div className="flex gap-4">
          <div
            className="h-[455px] w-[356px] bg-repeat bg-top bg-cover"
            style={{
              backgroundImage: 'url("/assets/advise-img1.webp")',
            }}
          >
            <div
              className="h-full w-full text-[15px] text-white font-[750]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(74, 159, 191, 0.8), rgba(1, 60, 82, 0.8))",
              }}
            >
              <div className="flex flex-col justify-start items-center h-full px-7 pb-7 pt-14 text-justify leading-[1.8] tracking-[0] gap-8">
                <div>
                  <span className="text-[#FFDE59]">Freewill Agency</span>{" "}
                  {t("common:advise:article-1:body:0")}{" "}
                </div>
                <div>{t("common:advise:article-1:body:1")}</div>
              </div>
            </div>
          </div>

          <div className="h-[326px] w-[580px]">
            <div
              className="h-full w-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url("/assets/advise-img1.webp")',
              }}
            ></div>
            <div className="mt-3 flex flex-col gap-3 text-justify">
              <div className="text-[#038387] text-[20px] font-bold leading-[1.2]">
                {t("common:advise:article-2:title")}
              </div>
              <div className="text-[16px] leading-[1.6]">
                {t("common:advise:article-2:body")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advise;
