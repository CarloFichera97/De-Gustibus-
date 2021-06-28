import React from "react";

const Testimonial = (props) => {
  return (
    <div className="col-md-4 testimonial-three-col">
      <div className="testimonial-inner">
        <div className="testimonial-image" itemProp="image">
          <img
            className="testimonial_img_element"
            width="180"
            height="180"
            src={props.image}
          />
        </div>
        <div className="testimonial-content">
          <h2 className="reviews_title"> {props.title}</h2>
          <p className="reviews_paragraph">{props.paragraph}</p>
        </div>
        <div className="testimonial-meta">
          <strong className="testimonial-name" itemProp="name">
            {props.author}
          </strong>
          <a target="_blank" className="testimonial-link" href={props.link}>
            Tripadvisor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
