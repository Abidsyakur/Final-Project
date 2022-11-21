import { DEFAULT_MIN_BREAKPOINT } from "react-bootstrap/esm/ThemeProvider";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gal1 from "../assets/gal1.jpg"
import gal2 from "../assets/gal2.jpg"
import gal3 from "../assets/gal3.jpg"
import gal4 from "../assets/gal4.jpg"
import gal5 from "../assets/gal5.jpg"
import gal6 from "../assets/gal6.jpg"
import gal7 from "../assets/gal7.jpg"
import min1 from "../assets/min1.jpg"
import min2 from "../assets/min2.jpg"
import min3 from "../assets/min3.jpg"
import min4 from "../assets/min4.jpg"
import min5 from "../assets/min5.jpg"
import min6 from "../assets/min6.jpg"

import menu1 from "../assets/menu1.jpg"
import { Container,Row,Col, Form } from "react-bootstrap";

const Menu = () =>{
    return(
    <div className="Menu1">
        <div className="Container">
        <h1 id="header_menu">MENU</h1>
        <div className="row" id="menu">
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gal1} height="300" />
                <Card.Body className="CardBody" >
                <Card.Title>Souffle Pancake</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gal2} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Chicken Ball</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card  className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gal3} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Dimsum</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
        </div>    
        <div className="row pt-5" id="menu">
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={gal4} height="300"  />
                <Card.Body className="CardBody">
                <Card.Title>Potato Crispy</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gal6} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Long Shusi</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gal7} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Corn Dog</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
        </div>    
        <div className="row pt-5"id="menu">
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={min1} height="300"  />
                <Card.Body className="CardBody">
                <Card.Title>Matcha Boba</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={min2} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Matcha</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={min3} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Coffe MilkShake</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
        </div>    
        <div className="row pt-5" id="menu">
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={min4} height="300"  />
                <Card.Body className="CardBody">
                <Card.Title>Lemon Mojito</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={min5} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Watermelon Mojito</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button  id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card className="Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={min6} height="300" />
                <Card.Body className="CardBody">
                <Card.Title>Boba Tea</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button id="tombol_menu">Order Sekarang</Button>
                </Card.Body>
                </Card>
            </div>
        </div>    
        </div>
        
    
    </div>
   
   

    );
}

export default Menu;