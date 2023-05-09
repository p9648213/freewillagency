import Image from "next/image";
import Navbar from "../navmenu/Navbar";
import Link from "next/link";
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
        <div className="w-[350px] flex relative items-center justify-center max-sm:justify-start max-sm:w-full max-sm:h-[100px]">
          <div className="w-full cursor-pointer max-sm:w-[170px]">
            <Link href="https://www.freewillcapital.com/">
              <Image
                src="/assets/new-logo.png"
                alt="logo"
                className="w-full h-full"
                width={0}
                height={0}
                sizes="100vw"
              />
            </Link>
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
