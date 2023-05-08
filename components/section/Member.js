import { useTranslation } from "next-i18next";
import MemberMB from "./MemberMB";

function Member() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-[1100px] bg-[#C8FEFF] flex items-center justify-center relative overflow-hidden max-sm:hidden">
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <div className="text-[30px] text-[#018489] font-bold leading-[1.4]">
            {t("common:member:title")}
          </div>
          <div className="h-[5px] w-[77px] bg-[#FFDE63]"></div>
          <div className="text-[#018489] text-[21px] leading-[1.4]">
            {t("common:member:slogan")}
          </div>

          <div className="flex pt-6 gap-6">
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
          </div>
          <div className="mt-7">
            <div
              className=" w-[799px] h-[398px] bg-cover"
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

          <div className="py-14 absolute top-[50%] left-[50%] translate-x-[-225%] translate-y-[-100%]">
            <div className="w-[422px] h-[422px] border-[#0E8387] border-2 rounded-full ml-14">
              <div
                className="w-[139px] h-[139px] bg-gradient-to-b from-[#2B70E6] to-[#28A2A0] top-[40px]
          left-[380px] absolute rounded-full"
              ></div>
              <div
                className="w-[44.4px] h-[44.4px] rounded-full absolute top-[141px] left-[470px]"
                style={{
                  background:
                    "linear-gradient(rgb(203, 191, 163), rgb(255, 190, 39))",
                }}
              ></div>
              <div className="w-[21px] h-[21px] top-[650px] left-[470px] absolute border-2 border-[#FFBE27] origin-center rotate-[40deg]"></div>
            </div>
          </div>

          <div className="py-14 absolute top-[50%] left-[50%] translate-x-[134%] translate-y-[55%] ">
            <div className="w-[422px] h-[422px] border-[#0E8387] border-2 rounded-full ml-14">
              <div
                className="w-[139px] h-[139px] bg-gradient-to-b from-[#2B70E6] to-[#28A2A0] top-[40px]
          left-[70px] absolute rounded-full"
              ></div>
              <div
                className="w-[44.4px] h-[44.4px] rounded-full absolute top-[50px] left-[60px]"
                style={{
                  background:
                    "linear-gradient(rgb(203, 191, 163), rgb(255, 190, 39))",
                }}
              ></div>
              <div className="w-[21px] h-[21px] top-[130px] left-[40px] absolute border-2 border-[#FFBE27] origin-center rotate-[40deg]"></div>
            </div>
          </div>
        </div>
      </div>
      <MemberMB />
    </>
  );
}

export default Member;
