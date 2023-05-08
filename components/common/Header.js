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
    <div className="flex flex-row bg-white justify-center items-center max-sm:justify-start sm:h-[116px] max-sm:w-full">
      <div className="gap-28 h-full flex max-sm:block max-sm:w-full">
        <div
          className="w-[320px] translate-y-[-15px]
          flex relative items-center justify-center max-sm:justify-start max-sm:translate-x-10 max-sm:w-full max-sm:h-[100px]"
        >
          <div className="w-[150px] cursor-pointer max-sm:w-[110px]">
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
            className={`absolute text-center w-full top-[50%] left-[50%] translate-x-[-50%] text-[#0c6c90] font-[550] max-sm:w-fit max-sm:left-0 max-sm:translate-x-[-10%] max-sm:text-[10px] max-sm:top-[55%] ${
              language === "en"
                ? "text-[16px] translate-y-[140%]"
                : "text-[14px] translate-y-[165%]"
            }`}
          >
            {t("common:header:slogan")}
          </div>
        </div>

        <Navbar handleScrolling={handleScrolling} />

        <div className="flex-shrink-0 flex items-center justify-center mx-3 max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:translate-y-[100%]">
          <button
            onClick={switchLanguage}
            className="text-[16px] text-white bg-[#0C6C90] font-[550] px-12 py-2 rounded-full mx-3 max-sm:text-[10px] max-sm:px-10"
          >
            {language === "vi" ? "ENG" : "VN"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
