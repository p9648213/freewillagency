import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { slidesEN, slidesVN } from "../../config/bannerItemsConfig";

function Banner({ handleScrolling }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  const slides = language === "vi" ? slidesVN : slidesEN;

  useEffect(() => {
    setTriggerAnimation(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }
    }, 5000);

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
    <div className="flex justify-center items-center">
      <div
        className="relative max-w-fit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* {slides.map((slide, index) => (
        <div
          key={index}
          className={`h-[900px] bg-cover bg-no-repeat flex items-center justify-center absolute top-0 left-0 w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={
            !slide.details
              ? {
                  backgroundImage: `url("/assets/${slide.img}")`,
                  opacity: `${index === currentSlide ? "1" : "0"}`,
                }
              : {
                  backgroundImage: `linear-gradient(rgba(14, 114, 150, 0.5), rgba(14, 114, 150, 0.5)), url("/assets/${slide.img}")`,
                  opacity: `${index === currentSlide ? "1" : "0"}`,
                }
          }
        ></div>
      ))} */}

        <div
          key={currentSlide}
          className={`flex justify-center items-center h-full ${
            triggerAnimation ? "fade-in" : ""
          }`}
        >
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(14, 114, 150), rgba(14, 114, 150))`,
            }}
          >
            <Image
              src={`/assets/${slides[currentSlide].img}`}
              width={2160}
              height={1080}
              className={`max-h-[760px] ${
                slides[currentSlide].details ? "opacity-50" : "opacity-100"
              }`}
              alt={slides[currentSlide].img}
            ></Image>
          </div>
        </div>

        {slides[currentSlide].details && (
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-max`}
          >
            <div className="flex flex-col items-center gap-12">
              <div
                className={`text-white font-bold text-[68px] leading-none text-center whitespace-pre max-sm:text-[35px]`}
              >
                {slides[currentSlide].details.title}
              </div>

              {slides[currentSlide].details?.button?.type &&
                slides[currentSlide].details?.button?.type === "link" && (
                  <Link
                    href={slides[currentSlide].details.button.target || "#"}
                    className="bg-[#0C6C90] text-white px-14 py-4 text-[15px] font-sans font-bold rounded-xl max-sm:text-[10px] max-sm:px-8 max-sm:py-3"
                  >
                    {slides[currentSlide].details.button.title}
                  </Link>
                )}

              {slides[currentSlide].details?.button?.type &&
                slides[currentSlide].details?.button?.type === "target" && (
                  <button
                    data-target={
                      slides[currentSlide].details.button.target || "program"
                    }
                    className="bg-[#0C6C90] text-white px-14 py-4 text-[15px] font-sans font-bold rounded-xl max-sm:text-[10px] max-sm:px-8 max-sm:py-3"
                    onClick={handleScrolling}
                  >
                    {slides[currentSlide].details.button.title}
                  </button>
                )}
            </div>
          </div>
        )}

        <div
          className={`absolute left-10 top-0 bottom-0 flex items-center justify-center slide-animation max-sm:left-3 ${
            isPaused ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="text-white text-2xl rounded-full bg-black hover:bg-[#063b4e] bg-opacity-50 px-3 py-2 focus:outline-none max-sm:text-xl"
            onClick={handlePrevClick}
          >
            <FaArrowLeft />
          </button>
        </div>

        <div
          className={`absolute right-10 top-0 bottom-0 flex items-center justify-center slide-animation max-sm:right-3 ${
            isPaused ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="text-white text-2xl rounded-full bg-black hover:bg-[#063b4e] bg-opacity-50 px-3 py-2 focus:outline-none max-sm:text-xl"
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
    </div>
  );
}

export default Banner;
