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
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div className="gallery">
        {galleryData.map((column) => (
          <div className="gallery__column">
            {column.map((element) => (
              <GalleryElement
                handleCloseModal={this.handleCloseModal}
                handleOpenModal={this.handleOpenModal}
                showModal={this.state.showModal}
                name={element.name}
                image={element.image}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
