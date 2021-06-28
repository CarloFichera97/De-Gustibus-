import React from "react";
import Testimonial from "./Testimonial";
import testimonialData from "./../data/testimonialData";

const Testimonials = () => {
  return (
    <div>
      <section class="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-white text-center">
              <h2 class="section-title "> What Others Say About Us</h2>
              <p class="section-sub-title">
                We are always looking to get feedback and suggestions for
                improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-primary t-bordered">
        <div class="container">
          <div class="row testimonial-three testimonial-three--col-three">
            <Testimonial
              image={testimonialData[0].image}
              title={testimonialData[0].title}
              paragraph={testimonialData[0].paragraph}
              author={testimonialData[0].author}
              link={testimonialData[0].link}
            />
            <Testimonial
              image={testimonialData[1].image}
              title={testimonialData[1].title}
              paragraph={testimonialData[1].paragraph}
              author={testimonialData[1].author}
              link={testimonialData[1].link}
            />

            <Testimonial
              image={testimonialData[2].image}
              title={testimonialData[2].title}
              paragraph={testimonialData[2].paragraph}
              author={testimonialData[2].author}
              link={testimonialData[2].link}
            />

            <Testimonial
              image={testimonialData[3].image}
              title={testimonialData[3].title}
              paragraph={testimonialData[3].paragraph}
              author={testimonialData[3].author}
              link={testimonialData[3].link}
            />

            <Testimonial
              image={testimonialData[4].image}
              title={testimonialData[4].title}
              paragraph={testimonialData[4].paragraph}
              author={testimonialData[4].author}
              link={testimonialData[4].link}
            />
            <Testimonial
              image={testimonialData[5].image}
              title={testimonialData[5].title}
              paragraph={testimonialData[5].paragraph}
              author={testimonialData[5].author}
              link={testimonialData[5].link}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
