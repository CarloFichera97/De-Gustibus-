import React from "react";
import GalleryElement from "./GalleryElement";
import galleryData from "./../data/galleryData";
/*
Looping through the following
galleryData = [{
  name:"XX"
  image:"YY"
},{
   name:"XX"
  image:"YY"
}]
*/
const Gallery = () => {
  return (
    <div className="gallery">
      {galleryData.map((column) => (
        <div className="gallery__column">
          {column.map((element) => (
            <GalleryElement name={element.name} image={element.image} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
