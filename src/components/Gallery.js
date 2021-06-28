import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/14.jpg"
              alt="Pasta with Pistachio"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Pasta with Pistachio
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/2.jpg"
              alt="Bruschetta Linosa"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Bruschetta Linosa
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/3.jpg"
              alt="Panino ???"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Panino ????</figcaption>
          </figure>
        </a>
      </div>

      <div class="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/16.jpg"
              alt="Local Cheeses"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Local Cheeses</figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/11.jpg"
              alt="Local Wine, Cheeses and Salumi"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Local Wine, Cheeses and Salumi
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/10.jpg"
              alt="Main Restaurant Area"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Main Restaurant Area
            </figcaption>
          </figure>
        </a>
      </div>

      <div className="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/18.jpg"
              alt="Dioniso"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Dioniso</figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure class="gallery__thumb">
            <img
              src="/images/gallery/27.jpg"
              alt="Aperitivo Rinforzato"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Aperitivo Rinforzato
            </figcaption>
          </figure>
        </a>
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img alt="TO BE DECIDED" className="gallery__image" />
            <figcaption className="gallery__caption">TO BE DECIDED</figcaption>
          </figure>
        </a>
      </div>

      <div className="gallery__column">
        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/17.jpg"
              alt="Scirocco Salad"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Scirocco Salad</figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/15.jpg"
              alt="Pasta alla Norma"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Pasta alla Norma
            </figcaption>
          </figure>
        </a>

        <a target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="/images/gallery/8.jpg"
              alt="Wine Collection"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">
              Wine Collection
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default Gallery;
