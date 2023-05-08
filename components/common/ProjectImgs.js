import Image from "next/image";
import { useTranslation } from "next-i18next";

function ProjectImgs() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div
      className="h-[880px] bg-cover bg-no-repeat max-sm:hidden"
      style={{
        backgroundImage: `url("/assets/program.webp")`,
      }}
    >
      <div
        className="h-full w-full flex items-center justify-center pb-5"
        style={{
          backgroundColor: "rgba(255, 255, 254, 0.9)",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-9">
          <div className="text-center text-[40px] font-bold text-[#0C6C90]">
            {language === "en" ? (
              <>
                {t("common:projectImgs:title:0")}
                <br /> {t("common:projectImgs:title:1")}{" "}
                <span className="text-[#EEC10A]">
                  {t("common:projectImgs:title:2")}
                </span>{" "}
                {t("common:projectImgs:title:3")}
              </>
            ) : (
              <>
                {t("common:projectImgs:title:0")}
                <br /> {t("common:projectImgs:title:1")}{" "}
                <span className="text-[#EEC10A]">
                  {t("common:projectImgs:title:2")}
                </span>
              </>
            )}
          </div>
          <div className="flex">
            <div
              className="w-[403px] h-[672px] relative"
              style={{
                background:
                  "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,90,251,1) 100%)",
              }}
            >
              <Image
                src="/assets/projectimg-img1.png"
                className="w-full h-full object-cover object-left-bottom opacity-80"
                width={1280}
                height={720}
                alt="projectimg"
              />
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col justify-center h-[500px]"
                style={{
                  background:
                    "linear-gradient(rgba(255, 255, 255, 0), rgb(10, 103, 233))",
                }}
              >
                <div className="flex flex-col gap-4 ml-10 mt-[80%]">
                  <div className="text-[19px] text-[#EEC10A] font-bold">
                    HYATT PLACE HOTEL
                  </div>
                  <div className="text-[15px] text-white">
                    San Jose - California
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-[335px] flex-1 overflow-hidden">
                <Image
                  src="/assets/projectimg-img2.webp"
                  className="w-full h-full object-cover object-center scale-150"
                  style={{ objectPosition: "55% -40px" }}
                  width={1280}
                  height={720}
                  alt="projectimg"
                />
              </div>
              <div className="w-[335px] flex-1 overflow-hidden">
                <Image
                  src="/assets/projectimg-img4.webp"
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: "70%" }}
                  width={1280}
                  height={720}
                  alt="projectimg"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-[335px] flex-1 overflow-hidden">
                <Image
                  src="/assets/projectimg-img3.webp"
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: "90%" }}
                  width={1244}
                  height={700}
                  alt="projectimg"
                />
              </div>
              <div className="w-[335px] flex-1 overflow-hidden">
                <Image
                  src="/assets/projectimg-img5.webp"
                  className="w-full h-full object-cover object-center scale-[1.35]"
                  style={{ objectPosition: "-10% -40px" }}
                  width={1280}
                  height={720}
                  alt="projectimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectImgs;
