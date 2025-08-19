import React from "react";
import "./HeroHome.css";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarousalContentData from "./CarousalContentData";
import { IoArrowForwardOutline } from "react-icons/io5";

const HeroHome = () => {
    return (
        <div className="hero-home-container">
            <div className="Container">
                <div className="HeroHomeContentContainer">
                    <div className="BackgroundHomeSVgContainer">
                        <img src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fbed4afd0adccab7b39951_Background%20Graphic.svg" alt="" />
                    </div>
                    <div className="HeroHomeContent">
                        <Row>
                            <Col lg={16}>
                                <h1><span>Munoth Capital.</span> <br />
                                    Your Trusted <br />Investment Partner.
                                </h1>
                            </Col>
                            <Col lg={8}>
                                <div className="HeroHomeContentSwiperContainer">
                                    <div className="HeroHomeCarousalContainer">
                                        <Swiper
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            speed={800}
                                            loop={true}
                                            // pagination={{
                                            //     clickable: true,
                                            // }}
                                            // navigation={true}
                                            modules={[Autoplay, Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            {
                                                CarousalContentData.map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div>
                                                            <h3>{item.title}</h3>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                    <div className="AnimatedButtonContainer marginTop20px">
                                        <div>
                                            <button className="AnimateBtn"><span><IoArrowForwardOutline /></span><span>Get in touch</span></button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroHome;    