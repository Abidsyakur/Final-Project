import { Container,Col,Row,Image } from "react-bootstrap";

import foto from '../assets/about.jpg';

const About = () => {
    return(
    <div className="About">
        <div className="Container">
           <div className="row">
                <div id="col1" className="col">

                    <h1 id="txt_about">About Us</h1>
                <div className="txt_about2">
                <h4>IT STARTED, QUITE SIMPLY, LIKE THIS...</h4>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.

Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.</p>
                </div>
                    
                </div>
                <div id="col2" className="col">
                    <img className="foto_about" src={foto} height="350"/>
                </div>
           </div>
        </div>
    </div>
        
        
    );
}

export default About;