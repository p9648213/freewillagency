import Image from "next/image";

export default function MemberCard({
  name,
  title,
  detail,
  img,
  alt,
  scaleWidth,
  scaleHeight,
  moveVertical,
  moveHorizontal,
  width,
  height,
}) {
  let renderDetail = detail.split("/n").map((d, index) => {
    return <div key={index}>{d}</div>;
  });

  let scalesWidth = scaleWidth ? (+scaleWidth / 100).toString() : "1";
  let scalesHeight = scaleHeight ? (+scaleHeight / 100).toString() : "1";
  let movesVertical = moveVertical ? `${moveVertical}px` : "0px";
  let movesHorizontal = moveHorizontal ? `${moveHorizontal}px` : "0px";

  return (
    <>
      <div className="relative" style={{ fontFamily: "Niramit" }}>
        <div className="w-[250px] h-[289px] overflow-hidden">
          <Image
            src={`/assets/${img}`}
            width={width}
            height={height}
            alt={alt}
            className="w-full"
            style={{
              scale: `${scalesWidth} ${scalesHeight}`,
              transform: `translate(${movesHorizontal}, ${movesVertical})`,
            }}
          />
        </div>
        <div
          className="absolute -left-4 -right-4 top-[100%] border-[2px] rounded-[4px] h-[120px]"
          style={{ borderColor: "rgba(7, 58, 125, 0.1)" }}
        >
          <div className="flex flex-col justify-center items-center p-2">
            <div className="text-[20px] text-[#A47E0D] font-bold text-center">
              {name}
            </div>
            <div className="text-[15px] text-[#044AA8] font-bold text-center">
              {title}
            </div>
            <div className="text-[13px] text-[#044AA8] text-center leading-[1.2] pt-1">
              {renderDetail}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
