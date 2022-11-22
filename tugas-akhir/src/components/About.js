import { Container, Col, Row, Image } from "react-bootstrap";

import foto from "../assets/about.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="Container" id="c_about">
        <div className="row">
          <div id="col1" className="col">
            <h1 id="txt_about">About Us</h1>
            <div className="txt_about2">
              <h4>IT STARTED, QUITE SIMPLY, LIKE THIS...</h4>
              <br></br>
              <p>
                -SHARFARAZ CAFE was founded in 1974 in Pasuruan, Indonesia. The
                franchise, operated under Home-Grown Industries of Indonesia,
                Inc., is headquartered in Pasuruan, Indonesia.
              </p>
              <p>
                For over 40 years, Mellow Mushroom Pizza Bakers has been serving
                up fresh, stone-baked pizzas to order in an eclectic,
                art-filled, and family-friendly environment. Each Mellow is
                locally owned and operated and provides a unique feel focused
                around great customer service and high-quality food-
              </p>
            </div>
          </div>
          <div id="col2" className="col">
            <img className="foto_about" src={foto} height="350" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
