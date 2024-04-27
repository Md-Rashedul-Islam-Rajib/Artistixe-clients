import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";


const Banner = () => {
  return (
    <div className="mt-8">
      <Swiper
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-[url('/slide1.jpg')] h-72 md:h-96 lg:h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div className="flex-1 flex flex-col md:gap-1 lg:gap-4 justify-center text-[#006900]">
            <h2 className="text-sm md:text-2xl lg:text-4xl font-bold ml-4 md:ml-10 lg:ml-20 md:mr-5">Unleash Your Creativity!</h2>
            <p className="text-xs md:text-base font-medium ml-4 mt-1 md:ml-10 lg:ml-20 w-4/5">Explore a world of imagination with our exquisite collection of drawings and paintings. From stunning landscapes to captivating portraits, find the perfect masterpiece to adorn your space</p>
        </div>
        <div className="flex-1"></div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/slide2.jpg')] h-72 md:h-96 lg:h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">

        <div className="flex-1"></div>
          <div className="flex-1 flex flex-col md:gap-1 lg:gap-4 justify-center mr-4 text-[#FF2A22]">
            <h2 className="text-sm md:text-2xl lg:text-4xl font-bold ml-4 md:ml-10 lg:ml-20 md:mr-5">Elevate Your Walls with Artistry!</h2>
            <p className="text-xs md:text-base font-medium ml-4 mt-1 md:ml-10 lg:ml-20 w-4/5">Transform your home into a gallery of elegance and charm. Discover handcrafted drawings and paintings that breathe life into any room. Let your walls tell a story of sophistication and style</p>
        </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/slide3.jpg')] h-72 md:h-96 lg:h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">

          <div className="flex-1 flex flex-col md:gap-1 lg:gap-4 justify-center text-[#AA429B]">
            <h2 className="text-sm md:text-2xl lg:text-4xl font-bold ml-4 md:ml-10 lg:ml-20 md:mr-5">Artistry Unveiled: Discover Your Inspiration</h2>
            <p className="text-xs md:text-base font-medium ml-4 mt-1 md:ml-10 lg:ml-20 w-4/5">Embark on a journey of artistic discovery. Immerse yourself in a curated selection of drawings and paintings that ignite passion and evoke emotion. Find the inspiration you seek to enrich your surroundings and uplift your spirit</p>
        </div>
        <div className="flex-1"></div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
