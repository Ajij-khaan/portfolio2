import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

import './MyProjects.css'
import Button from '@restart/ui/esm/Button';

SwiperCore.use([EffectCoverflow, Pagination]);

// https://i.ibb.co/VVLBVh3/tour.png
// https://i.ibb.co/ZmVZ0Ff/carhub.png
// https://i.ibb.co/G3VBZ4B/medtim.png

const MyProjects = () => {
    return (
        <>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">

                <SwiperSlide>
                    <img src="https://i.ibb.co/VVLBVh3/tour.png" alt="" />
                    <p className="mt-4">Tour Buddy - a Travel Agency Website</p>
                    <div className="button">
                        <button className="btn rounded-pill mx-2 my-1">See Project</button>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/ZmVZ0Ff/carhub.png" alt="" />
                    <div className="button">
                        <p className="pt-3">Car House - a Travel Agency Website</p>
                        <button className="btn bg-green rounded-pill mx-2 my-1">See Project</button>

                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <img src="https://i.ibb.co/G3VBZ4B/medtim.png" alt="" />
                    <div className="button">
                        <p className="pt-3">Med Time - a Telemedicine Website</p>
                        <button className="btn bg-green rounded-pill mx-2 my-1">See Project</button>

                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default MyProjects;