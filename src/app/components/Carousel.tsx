"use client";

import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CustomCarouselProps {
  children: ReactElement[];
  autoPlay?: boolean;
  infiniteLoop?: boolean;
  showThumbs?: boolean;
  showStatus?: boolean;
  interval?: number;
}

const CustomCarousel = (props: CustomCarouselProps) => {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      {...props}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ArrowLeftCircle className="w-9 h-9 text-black" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ArrowRightCircle className="w-9 h-9 text-black" />
          </div>
        );
      }}
    >
      {props.children}
    </Carousel>
  );
};

export default CustomCarousel;
