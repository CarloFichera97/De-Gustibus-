import React from "react";

const GalleryElement = (props) => {
  return (
    <a target="_blank" className="gallery__link">
      <figure className="gallery__thumb">
        <img src={props.image} alt={props.name} className="gallery__image" />
        <figcaption className="gallery__caption">{props.name}</figcaption>
      </figure>
    </a>
  );
};

export default GalleryElement;
