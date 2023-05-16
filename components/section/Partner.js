import { partners } from "@/config/partnerConfig";
import PartnerImage from "../common/PartnerImage";
import { useTranslation } from "next-i18next";

function Partner() {
  const { t } = useTranslation();

  return (
    <div className="pt-7 pb-10 max-sm:pb-4">
      <div className="flex flex-col justify-center items-center gap-12 max-sm:gap-9">
        <div className="text-[#073A91] text-[30px] font-bold text-center max-sm:text-[24px]">
          {t("common:partner:title")}
          <br />
          <span className="text-[#FFDE59]">Freewill Agency CO.,LTD</span>
        </div>
        <div className="grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-9 gap-10">
          {partners.map((partner) => {
            return (
              <PartnerImage
                imageName={partner.name}
                alt={partner.alt}
                key={partner.name}
                scaleWidth={partner?.scaleWidth}
                scaleHeight={partner?.scaleHeight}
                moveVertical={partner?.moveVertical}
                moveHorizontal={partner?.moveHorizontal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Partner;
