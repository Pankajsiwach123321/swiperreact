import React from "react";
import { useSwiper } from "swiper/react";

const Custumbutton = () => {
  const swiper = useSwiper();
  return (
    <div className=" ">
      <div className="   z-50 w-full flex justify-between items-center mt-5  ">
        <button
          onClick={() => swiper.slidePrev()}
          className=" px-4 py-3 bg-blue-600 border-2 border-dashed border-transparent rounded-2xl hover:bg-transparent hover:border-blue-700 hover:text-blue-700 duration-300"
        >
          PREV
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className=" px-4 py-3 bg-blue-600 border-2 border-dashed border-transparent rounded-2xl  hover:bg-transparent hover:border-blue-700 hover:text-blue-700 duration-300"
        >
          NEXT
        </button>
      </div>{" "}
    </div>
  );
};

export default Custumbutton;
