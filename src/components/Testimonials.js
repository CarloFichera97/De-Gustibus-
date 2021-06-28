import React from "react";
import Testimonial from "./Testimonial";
import testimonialData from "./../data/testimonialData";

const Testimonials = () => {
  return (
    <div>
      <section className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white text-center">
              <h2 className="section-title "> What Others Say About Us</h2>
              <p className="section-sub-title">
                We are always looking to get feedback and suggestions for
                improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-primary t-bordered">
        <div className="container">
          <div className="row testimonial-three testimonial-three--col-three">
            {testimonialData.map((element, index) => (
              <Testimonial
                key={index}
                image={element.image}
                title={element.title}
                paragraph={element.paragraph}
                author={element.author}
                link={element.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
