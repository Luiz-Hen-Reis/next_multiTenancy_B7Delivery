import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.imageContainer}>
            <Image width={500} height={500} src="/temp/banner1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.imageContainer}>
            <Image width={500} height={500} src="/temp/banner2.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
