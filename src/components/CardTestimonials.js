import React from "react";
import iconStar from "../assets/image/Star 1.svg";

const CardTestimonials = (props) => {
  return (
    <section
      id="cardsTestimonials"
      className="d-flex align-items-center gap-sm-4 gap-md-5 gap-lg-4 gap-xl-5 gap-4 rounded-4 flex-md-row flex-lg-column flex-xl-row flex-column"
    >
      <div className="image">
        <img src={props.Image} alt={props.alt} />
      </div>
      <div className="content">
        <div className="stars text-center text-md-start text-lg-center text-xl-start">
          <img src={iconStar} alt="icon_star" />
          <img src={iconStar} alt="icon_star" />
          <img src={iconStar} alt="icon_star" />
          <img src={iconStar} alt="icon_star" />
          <img src={iconStar} alt="icon_star" />
        </div>
        <p className="mt-3">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”
        </p>
        <p className="fw-light">John Dee 32, Bromo</p>
      </div>
    </section>
  );
};

export default CardTestimonials;
