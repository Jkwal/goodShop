import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSlideChange={() => {
            }}
            onSwiper={() => {
            }}
        >
            <SwiperSlide>Advertising 1</SwiperSlide>
            <SwiperSlide>Advertising 2</SwiperSlide>
            <SwiperSlide>Advertising 3</SwiperSlide>
            <SwiperSlide>Advertising 4</SwiperSlide>
        </Swiper>
    );
};