import React from "react";

const Testimonial = (props) => {
  return (
    <div class="col-md-4 testimonial-three-col">
      <div class="testimonial-inner">
        <div class="testimonial-image" itemprop="image">
          <img
            className="testimonial_img_element"
            width="180"
            height="180"
            src={props.image}
          />
        </div>
        <div class="testimonial-content">
          <h2 className="reviews_title"> {props.title}</h2>
          <p className="reviews_paragraph">{props.paragraph}</p>
        </div>
        <div class="testimonial-meta">
          <strong class="testimonial-name" itemprop="name">
            {props.author}
          </strong>
          <a target="_blank" class="testimonial-link" href={props.link}>
            Tripadvisor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
