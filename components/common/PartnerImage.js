import Image from "next/image";

export default function PartnerImage({
  imageName,
  scaleWidth,
  scaleHeight,
  moveVertical,
  moveHorizontal,
  alt,
}) {
  let scalesWidth = scaleWidth ? (+scaleWidth / 100).toString() : "1";
  let scalesHeight = scaleHeight ? (+scaleHeight / 100).toString() : "1";
  let movesVertical = moveVertical ? `${moveVertical}px` : "0px";
  let movesHorizontal = moveHorizontal ? `${moveHorizontal}px` : "0px";

  return (
    <div className="w-[247px] h-[98px] flex justify-center items-center">
      <Image
        width={688}
        height={110}
        src={`/assets/partner/${imageName}`}
        alt={`${alt}`}
        style={{
          scale: `${scalesWidth} ${scalesHeight}`,
          transform: `translate(${movesHorizontal}, ${movesVertical})`,
        }}
      />
    </div>
  );
}
