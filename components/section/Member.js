import { useTranslation } from "next-i18next";
import Image from "next/image";
import MemberCard from "../common/MemberCard";

function Member() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="w-[335px] h-[134px]">
          <Image
            src="/assets/new-logo.png"
            width={889}
            height={500}
            alt="Logo"
            className="w-full"
          />
        </div>
        <div
          className="bg-[#FBFBFB] font-sans text-[55px] font-bold text-[#A47E0D] my-10 px-96 py-3 max-sm:text-[40px] max-sm:px-0 max-sm:w-full max-sm:text-center"
          style={{ fontFamily: "Niramit" }}
        >
          {i18n.language === "vi" ? (
            <span className="text-[40px] max-sm:text-[33px]">
              {t("common:member:title:0")}{" "}
              <span className="text-[#08409E]">
                {t("common:member:title:1")}
              </span>
            </span>
          ) : (
            <span>{t("common:member:title:0")}</span>
          )}
        </div>
        <div className="flex justify-center items-center gap-24 max-sm:flex-col max-sm:gap-40">
          <MemberCard
            name="Ms. Jenny Trang Nguyen"
            title="Founder & CEO"
            detail="Freewill Agency & Freewill Capital/n| Region Head Asia of Family Office Alpha"
            img="member-img1.webp"
            alt="Founder & CEO"
            width={600}
            height={899}
            scaleHeight={120}
            scaleWidth={120}
            moveVertical={5}
          />
          <MemberCard
            name="Ms. Catarina Trinh"
            title="Co-Founder & CFO"
            detail="Freewill Agency & Freewill Capital"
            img="member-img2.webp"
            alt="Co-Founder & CFO"
            width={700}
            height={1050}
            scaleHeight={150}
            scaleWidth={150}
            moveVertical={25}
          />
          <MemberCard
            name="Ms. Phoebe Van Tran"
            title="VP of Global Strategic & Business Development"
            detail="| Managing Partner for Family Office Alpha"
            img="member-img4.webp"
            alt="VP of Global Strategic & Business Development"
            width={428}
            height={582}
          />
        </div>
        <div className="flex justify-center items-center mt-40 w-[763px] max-sm:w-full">
          <Image
            src="/assets/member-img5.webp"
            alt="Team member"
            width={1410}
            height={700}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Member;
