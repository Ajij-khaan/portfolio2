import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

import './MyProjects.css'
import { Container } from 'react-bootstrap';



SwiperCore.use([EffectCoverflow, Pagination]);


const MyProjects = () => {

    useEffect(() => {
        AOS.init(({ duration: 2000 }));

    }, [])

    return (
        <div id="projects" className="global-bg pt-5" >
            <Container>

                <h1 id="projects" className="fw-bolder text-white text-uppercase pt-5" data-aos="zoom-in-down">My Latest Work</h1>
                <Swiper data-aos="zoom-in-down" effect={'coverflow'} initialSlide={1} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper " >

                    <SwiperSlide>
                        <img src="https://i.ibb.co/VVLBVh3/tour.png" alt="" />
                        <p className="mt-4 text-white">Tour Buddy - a Travel Agency Website</p>
                        <div className="button">
                            <button className="btn rounded-pill mx-2 my-1">See Project</button>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://i.ibb.co/ZmVZ0Ff/carhub.png" alt="" />
                        <div className="button">
                            <p className="pt-3 text-white">Car House - a Car Dealer Agency Website</p>
                            <button className="btn bg-green rounded-pill mx-2 my-1">See Project</button>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://i.ibb.co/G3VBZ4B/medtim.png" alt="" />
                        <div className="button">
                            <p className="pt-3 text-white">Med Time - a Telemedicine Website</p>
                            <button className="btn bg-green rounded-pill mx-2 my-1">See Project</button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Container>
        </div>
    );
};

export default MyProjects;