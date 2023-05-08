import { useTranslation } from "next-i18next";

function MemberMB() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#C8FEFF] flex items-center justify-center sm:hidden">
      <div className="flex flex-col justify-center items-center h-full gap-7 mt-5">
        <div className="text-[24px] text-[#018489] font-bold leading-[1.4] text-center">
          {t("common:member:title")}
        </div>
        <div className="h-[4px] w-[77px] bg-[#FFDE63]"></div>
        <div className="text-[#018489] text-[19px] leading-[1.4]">
          {t("common:member:slogan")}
        </div>

        <div>
          <div
            className="w-[223px] h-[265px] bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/member-img1.webp")',
              backgroundSize: "128%",
              backgroundPositionY: "20%",
              backgroundPositionX: "44%",
            }}
          ></div>
          <div className="h-[81.82px] py-2 bg-white border-b-[1px] border-gray-300 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-[2px]">
              <div className="text-[18px] text-[#018489] font-bold">
                Ms. Jenny Trang Nguyen
              </div>
              <div className="w-[141px] text-[12px] text-[#F0C519] font-bold italic text-center">
                Founder & CEO of Freewill Agency
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="w-[223px] h-[265px] bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/member-img2.webp")',
              backgroundSize: "130%",
              backgroundPositionY: "20%",
            }}
          ></div>
          <div className="h-[81.82px] py-2 bottom-[-80px] left-0 right-0 bg-white border-b-[1px] border-gray-300 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-[2px]">
              <div className="text-[18px] text-[#018489] font-bold">
                Ms. Catarina Trinh
              </div>
              <div className="w-[141px] text-[12px] text-[#F0C519] font-bold italic text-center">
                Co-Founder & CFO of Freewill Agency
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="w-[223px] h-[265px] bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/member-img4.webp")',
              backgroundSize: "120%",
              backgroundPositionY: "20%",
              backgroundPositionX: "75%",
            }}
          ></div>
          <div className="h-[81.82px] py-2 bottom-[-80px] left-0 right-0 bg-white border-b-[1px] border-gray-300 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-[2px]">
              <div className="text-[18px] text-[#018489] font-bold">
                Ms. Phoebe Van Tran
              </div>
              <div className="w-[141px] text-[12px] text-[#F0C519] font-bold italic text-center">
                Senior Advisor of Freewill Agency
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div
            className="w-full h-[200px] bg-cover"
            style={{ backgroundImage: 'url("/assets/member-img5.webp")' }}
          ></div>
          <div className="bg-white py-2 flex flex-col justify-center items-center">
            <div className="text-[#F0C519] text-[13px] font-bold italic">
              Founder & Co-Founders of Freewill Agency
            </div>
            <div className="text-[#018489] text-[18px] font-[650]">
              FREEWILL AGENCY MEMBERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberMB;
