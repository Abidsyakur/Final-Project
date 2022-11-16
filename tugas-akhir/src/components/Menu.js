import { DEFAULT_MIN_BREAKPOINT } from "react-bootstrap/esm/ThemeProvider";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import menu1 from "../assets/menu1.jpg"
import { Container,Row,Col } from "react-bootstrap";

const Menu = () =>{
    return(

    <div className="About">
        <div className="Container">
        <h1 id="header_menu">MENU</h1>
        <div className="row">
            <div id="col1"className="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>    
        <div className="row pt-5">
            <div id="col1"className="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
            <div id="col1"className="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>    
        </div>
        
    
    </div>
   
   

    );
}

export default Menu;