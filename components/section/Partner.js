import Image from "next/image";
import PartnerImage from "../common/PartnerImage";
import { useTranslation } from "next-i18next";

function Partner() {
  const { t } = useTranslation();

  return (
    <div
      className="pt-7 pb-16"
      style={{
        background:
          "linear-gradient(180deg, rgba(21, 66, 144, 1.0), rgba(5, 31, 77, 1.0))",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-12 max-sm:gap-9">
        <div className="text-[white] text-[30px] font-bold text-center max-sm:text-[24px]">
          {t("common:partner:title")}
          <br />
          <span className="text-[#FFDE59]">Freewill Agency CO.,LTD</span>
        </div>
        <div className="grid grid-cols-4 gap-14 max-sm:grid-cols-1 max-sm:gap-7">
          <PartnerImage
            imageName="partner-img2.webp"
            alt="Smart Pay"
            moveVertical={3}
          />
          <PartnerImage imageName="partner-img9.webp" alt="Infinity" />
          <PartnerImage imageName="partner-img10.webp" alt="ShopOff" />
          <PartnerImage imageName="partner-img6.webp" alt="Hyatt" />
          <PartnerImage
            imageName="partner-img8.webp"
            alt="Family Office"
            scaleWidth={120}
            moveVertical={3}
          />
          <PartnerImage
            imageName="partner-img11.webp"
            alt="Golden Phoenix"
            scaleWidth={70}
            scaleHeight={70}
            moveHorizontal={10}
            moveVertical={3}
          />
          <PartnerImage
            imageName="partner-img12.webp"
            alt="Freewill agency"
            scaleHeight={73}
            scaleWidth={73}
          />
          <PartnerImage
            imageName="partner-img7.webp"
            alt="Bitech"
            scaleHeight={80}
            scaleWidth={100}
            moveVertical={-7}
          />
        </div>
      </div>
    </div>
  );
}

export default Partner;
