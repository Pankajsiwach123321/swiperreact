import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";

import {
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCube,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
} from "swiper/modules";
import "swiper/css/effect-fade";
import Custumbutton from "./components/Custumbutton";
function App() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const swiperRef = useRef();
  return (
    <section className=" min-h-screen flex-col  flex">
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        SWIPER by React
      </h2>
      <div className=" flex flex-grow  items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Virtual, Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <Custumbutton />
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        Fade effect
      </h2>
      <div className=" flex flex-grow  items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          effect={"fade"}
          modules={[
            Virtual,
            EffectFade,
            Navigation,
            Pagination,
            A11y,
            Autoplay,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <Custumbutton />
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        AUTOPLAY
      </h2>
      <div className=" flex flex-grow  items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          effect={"fade"}
          modules={[
            Virtual,
            EffectFade,
            Navigation,
            Pagination,
            A11y,
            Autoplay,
          ]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        Centermode
      </h2>
      <div className=" center flex flex-grow  items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Virtual, Navigation, Pagination, A11y, Autoplay]}
          loop={true}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        Controller
      </h2>
      <div className="   items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          breakpoints={{
            850: {
              slidesPerView: 2,
            },
          }}
          modules={[
            Virtual,
            Navigation,
            Pagination,
            A11y,
            Autoplay,
            Controller,
          ]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
        <h2 className=" text-3xl text-center font-bold text-slate-500">
          Controle This Slide
        </h2>

        <Swiper
          breakpoints={{
            850: {
              slidesPerView: 2,
            },
          }}
          modules={[
            Virtual,
            Navigation,
            Pagination,
            A11y,
            Autoplay,
            Controller,
          ]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        Mousewheel control
      </h2>
      <div className=" flex flex-grow   items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[
            Virtual,
            Navigation,
            Pagination,
            A11y,
            Autoplay,
            Controller,
            Mousewheel,
          ]}
          spaceBetween={10}
          slidesPerView={1}
          mousewheel={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djfshjkfhhjfdnhcjfhhjgfhjfgfdgffgfhsfdhvkhfdg
                iuhfshj;hi;dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className="p-10 bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        cube effect
      </h2>
      <div className=" cube flex flex-grow   items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          effect="cube"
          modules={[
            Virtual,
            Navigation,
            Pagination,
            A11y,
            EffectCube,
            Mousewheel,
          ]}
          spaceBetween={10}
          slidesPerView={1}
          mousewheel={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" !w-full !h-auto">
            <div className="p-10 w-full bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto">
            <div className="p-10 w-full bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum djs perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto">
            <div className="p-10 w-full bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto">
            <div className="p-10 w-full bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className=" text-3xl text-center font-bold text-slate-500">
        card effect
      </h2>
      <div className=" card flex flex-grow   items-center max-w-[1440px] px-3 mx-auto w-full min-h-screen">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          modules={[Virtual, Navigation, Pagination, A11y, EffectCards]}
          effect={"cards"}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="  !h-auto">
            <div className="p-10 w-full bg-black h-full text-center flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="  !h-auto">
            <div className="p-10 w-full bg-yellow-600 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Loreconsectetur adipisicing elit. Sit sapiente aut corrupti ab
                blanditiis, quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="  !h-auto">
            <div className="p-10 w-full bg-green-500 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrupti ab blanditiis, quasi voluptates
                perspiciatis similique iure facere!
              </p>
              <img src={viteLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="  !h-auto">
            <div className="p-10 w-full bg-yellow-700 h-full flex flex-col items-center gap-5">
              <p className="text-white text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                sapiente aut corrujdfjkhdfjshjsgfsdjgfsdfsdpti ab blanditiis,
                quasi voluptates perspiciatis similique iure facere!
              </p>
              <img src={reactLogo} height={12} width={100} alt="vitelogo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default App;
