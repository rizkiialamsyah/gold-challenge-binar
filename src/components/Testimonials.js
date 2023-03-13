import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import CardTestimonials from "./CardTestimonials";
import imageTesti1 from "../assets/image/testi-1.png";
import imageTesti2 from "../assets/image/testi-2.png";

const Testimonials = () => {
  return (
    <section id="Testimonials" className="mt-5">
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1>Testimonial</h1>
            <p className="fw-semibold mt-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <>
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CardTestimonials Image={imageTesti1} alt={"Image testi 1"} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardTestimonials Image={imageTesti1} alt={"Image testi 1"} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardTestimonials Image={imageTesti2} alt={"Image testi 2"} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardTestimonials Image={imageTesti1} alt={"Image testi 1"} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardTestimonials Image={imageTesti1} alt={"Image testi 1"} />
                </SwiperSlide>
              </Swiper>
            </>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
