import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Banner({ handleScrolling }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslation();

  const slides = [
    "banner.webp",
    "footer-img1.webp",
    "consultion-img1.webp",
    "projectimg-img1.png",
    "projectimg-img4.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, slides.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div
      className="h-[595px] relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`h-[595px] bg-cover bg-no-repeat w-full flex items-center justify-center absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(14, 114, 150, 0.5), rgba(14, 114, 150, 0.5)), url("/assets/${slide}")`,
            opacity: `${index === currentSlide ? "1" : "0"}`,
          }}
        ></div>
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-max">
        <div className="flex flex-col items-center gap-12">
          <div
            className={`text-white font-bold text-[68px] leading-none text-center whitespace-pre`}
          >
            {t("common:banner:title")}
          </div>
          <button
            data-target="program"
            className="bg-[#0C6C90] text-white px-14 py-4 text-[15px] font-sans font-bold rounded-xl"
            onClick={handleScrolling}
          >
            {t("common:banner:button")}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-10 top-0 bottom-0 flex items-center justify-center slide-animation ${
          isPaused ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="text-white text-2xl rounded-full bg-black hover:bg-[#063b4e] bg-opacity-50 px-3 py-2 focus:outline-none"
          onClick={handlePrevClick}
        >
          <FaArrowLeft />
        </button>
      </div>

      <div
        className={`absolute right-10 top-0 bottom-0 flex items-center justify-center slide-animation ${
          isPaused ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="text-white text-2xl rounded-full bg-black hover:bg-[#063b4e] bg-opacity-50 px-3 py-2 focus:outline-none"
          onClick={handleNextClick}
        >
          <FaArrowRight />
        </button>
      </div>

      <div
        className={`absolute bottom-[20px] left-0 w-full flex justify-center slide-animation ${
          isPaused ? "opacity-100" : "opacity-0"
        }`}
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${
              currentSlide === index
                ? "bg-[#063b4e] bg-opacity-100"
                : "bg-gray-300 bg-opacity-60"
            } w-[13px] h-[13px] rounded-full mx-2 focus:outline-none hover:bg-[#063b4e]`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
