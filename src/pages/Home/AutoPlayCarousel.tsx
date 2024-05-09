
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoPlayCarousel() {
  const settings = {
  
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide: 0,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container  ">
      <Slider {...settings} >

        <p className='font-manrope  font-semibold xl:text-4xl lg:text-3xl  text-3xl lg:w-[350px] w-full md:w-full lg:leading-10 '>Enhance fortune 50 company’s insights teams research capabilities</p>

        <p className='font-manrope  font-semibold xl:text-4xl lg:text-3xl  text-3xl lg:w-[350px] w-full md:w-full lg:leading-10 '>Achieved reduction in project execution time by optimising team availability</p>

        <p className='font-manrope  font-semibold xl:text-4xl lg:text-3xl  text-3xl lg:w-[350px] w-full md:w-full lg:leading-10 '>Reduced client expenses by saving on hiring and employee costs.</p>
      </Slider>
    </div>
  );
}

export default AutoPlayCarousel;
