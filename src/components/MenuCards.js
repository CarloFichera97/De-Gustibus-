import React from "react";
import { Link } from "react-router-dom";

const MenuCards = () => {
  return (
    <div class="menucards_container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>

            <Link className="linkTo_menu" to="/menu/food">
              {" "}
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <h3>Wine</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>

            <Link className="linkTo_menu" to="/menu/wines">
              {" "}
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>03</h2>
            <h3>Beers/Drinks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>
            <Link className="linkTo_menu" to="/menu/drinks">
              {" "}
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
