import React, {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import {Image} from "antd";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface SliderProps {
    slides: string[];
    navigation: boolean;
}


export const Slider: FC<SliderProps> = ({slides, navigation}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation={navigation}
            pagination={{clickable: true}}
            onSlideChange={() => {
            }}
            onSwiper={() => {
            }}
        >
            {
                slides.map((slide,index) => (
                    <SwiperSlide key={index}>
                        <Image src={slide} alt={slide}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};