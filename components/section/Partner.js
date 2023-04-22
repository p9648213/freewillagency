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
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="text-[white] text-[30px] font-bold text-center">
          {t("common:partner:title")}
          <br />
          <span className="text-[#FFDE59]">Freewill Agency.,CO LTD</span>
        </div>
        <div className="grid grid-cols-4 gap-14">
          <PartnerImage
            imageName="partner-img2.webp"
            alt="Smart Pay"
            moveVertical={3}
          />
          <PartnerImage imageName="partner-img9.webp" alt="Infinity" />
          <PartnerImage
            imageName="partner-img3.webp"
            alt="Spinel"
            scaleWidth={45}
            scaleHeight={45}
          />
          <PartnerImage imageName="partner-img6.webp" alt="Hyatt" />
          <PartnerImage
            imageName="partner-img8.webp"
            alt="Family Office"
            scaleWidth={120}
            moveVertical={3}
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
