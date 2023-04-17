import Image from "next/image";
import Navbar from "../navmenu/Navbar";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Header({ handleScrolling }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const switchLanguage = () => {
    if (language === "vi") {
      i18n.changeLanguage("en");
      router.push("/", undefined, { locale: "en" });
    } else if (language === "en") {
      i18n.changeLanguage("vi");
      router.push("/", undefined, { locale: "vi" });
    }
  };

  return (
    <div className="h-[116px] flex flex-row bg-white justify-center items-center">
      <div className="flex gap-28 h-full">
        <div
          className="h-full w-[320px] translate-y-[-15px]
          flex relative items-center justify-center"
        >
          <div className="w-[150px] cursor-pointer">
            <Image
              src="/assets/logo.webp"
              alt="logo"
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div
            className={`absolute text-center w-full top-[50%] left-[50%] translate-x-[-50%]  text-[#0c6c90] font-[550] ${
              language === "en"
                ? "text-[16px] translate-y-[140%]"
                : "text-[14px] translate-y-[165%]"
            }`}
          >
            {t("common:header:slogan")}
          </div>
        </div>

        <Navbar />

        {/* <div className="flex-shrink-0 flex items-center justify-start gap-16 text-[#0E7196] text-[21px] font-[550]">
          <div className="h-full flex justify-center items-center relative z-20">
            <div className="h-full px-16 flex items-center cursor-pointer hover:bg-[#0E7196] hover:text-white">
              {t("common:header:titles:0")}
            </div>
            <div className="absolute z-10 bg-white top-[115px] text-[#0E7196] left-0 right-0 text-center py-5 text-[18px]">
              <div className="flex flex-col gap-6">
                <div>Picth Deck FreeWill.PDF</div>
                <div>Picth Deck BioTech.PDF</div>
                <div>Picth Deck Hayyat.PDF</div>
              </div>
            </div>
          </div>

          <div className="h-full flex justify-center items-center relative z-20">
            <div className="h-full px-16 flex items-center cursor-pointer hover:bg-[#0E7196] hover:text-white">
              {t("common:header:titles:1")}
            </div>
            <div className="absolute z-10 bg-white top-[115px] text-[#0E7196] left-0 right-0 text-center text-[18px]">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="py-2">Định cư Mỹ</div>
                  <div className="absolute top-0 bottom-0 left-[199px] bg-white whitespace-nowrap px-5 py-2 flex justify-center items-center">
                    Chương trình EB5
                  </div>
                </div>
                <div className="py-2">Định cư Úc</div>
                <div className="py-2">Investment</div>
              </div>
            </div>
          </div>

          <div
            className="h-full flex justify-center items-center relative z-20"
            data-target="footer"
            onClick={handleScrolling}
          >
            <div className="h-full px-16 flex items-center cursor-pointer hover:bg-[#0E7196] hover:text-white">
              {t("common:header:titles:2")}
            </div>
          </div>
        </div> */}
        <div className=" flex-shrink-0 flex items-center justify-center mx-3">
          <button
            onClick={switchLanguage}
            className="text-[16px] text-white bg-[#0C6C90] font-[550] px-12 py-2 rounded-full mx-3"
          >
            {language === "vi" ? "ENG" : "VN"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
