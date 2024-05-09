import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from 'react';

function AutoPlayCarousel() {

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide: 0,
    pauseOnHover: true,
    dots: true,
    appendDots: (dots: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          paddingBottom: "3px",
          textAlign: "start"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: SetStateAction<number>) => (
      <div className={` ${i === activeSlide ? "bg-[#2DA950]" : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"} rounded-full    h-2 w-2 cursor-pointer mt-10 mr-20`} >
      </div>
    ),
    beforeChange: (_: any, next: SetStateAction<number>) => {
      setActiveSlide(next);
    },

  }

  return (
    <div className="slider-container ">
      <Slider {...settings} >

        <p className='font-manrope  font-semibold xl:text-4xl lg:text-3xl  text-3xl lg:w-[350px] w-full md:w-full lg:leading-10 '>Enhance fortune 50 company’s insights teams research capabilities</p>

        <p className='font-manrope  font-semibold xl:text-4xl lg:text-3xl  text-3xl lg:w-[350px] w-full md:w-full lg:leading-10 '>Achieved reduction in project execution time by optimising team availability</p>

        <p className='font-manrope  font-semibold xl:text-4xl lg:text-3xl  text-3xl lg:w-[350px] w-full md:w-full lg:leading-10 '>Reduced client expenses by saving on hiring and employee costs.</p>
      </Slider>
    </div>
  );
}

export default AutoPlayCarousel;
