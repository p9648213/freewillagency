import Image from "next/image";
import { useTranslation } from "next-i18next";

function Partner() {
  const { t } = useTranslation();

  return (
    <div
      className="h-[630px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(21, 66, 144, 1.0), rgba(5, 31, 77, 1.0))",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-12 pt-10">
        <div className="text-[white] text-[30px] font-bold text-center">
          {t("common:partner:title")}
          <br />
          <span className="text-[#FFDE59]">Freewill Agency.,CO LTD</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex gap-28 justify-center items-center">
            <div className="w-[247px] h-[98px] bg-white py-2 px-6 flex justify-center items-center">
              <Image
                width={688}
                height={110}
                src="/assets/partner-img2.webp"
                alt="Smart Pay"
                className="w-[220px] h-[37px]"
              />
            </div>
            <div className="w-[272px] h-[98px] bg-white flex justify-center items-center overflow-hidden">
              <div className="py-1">
                <Image
                  src="/assets/partner-img9.webp"
                  alt="Infinity"
                  width={500}
                  height={500}
                  className="translate-y-2"
                />
              </div>
            </div>
            <div className="w-[128px] h-[128px] bg-white">
              <Image
                width={400}
                height={400}
                src="/assets/partner-img3.webp"
                alt="Spinel"
                className="w-full h-full"
              />
            </div>
            <div className="w-[247px] h-[98px] bg-white py-2 px-2">
              <Image
                width={998}
                height={282}
                src="/assets/partner-img6.webp"
                alt="Hyatt"
                className="w-full h-full"
              />
            </div>{" "}
          </div>
          <div className="flex gap-24 justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="w-[321px] h-[193px] overflow-hidden">
                <Image
                  width={2350}
                  height={1326}
                  src="/assets/partner-img8.webp"
                  alt="Family Office"
                  className="h-full scale-125 translate-x-[-10px]"
                />
              </div>
            </div>
            <div className=" flex justify-center items-center overflow-hidden">
              <div className="w-[362px] h-[182px] bg-white">
                <Image
                  width={725}
                  height={481}
                  src="/assets/partner-img7.webp"
                  alt="Bitech"
                  className="translate-y-[-38px] scale-95 w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
