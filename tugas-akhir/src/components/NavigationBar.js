import { Navbar, Container, Nav, NavLink} from "react-bootstrap"

const NavigationBar = () =>{
    return (
        <div>
            <Navbar className="navbar">
            <Container className="Cnav">
                <Navbar.Brand className="text-white">CafeShop</Navbar.Brand>
                <Nav>
                    <NavLink  className="text-white" href="/">HOME</NavLink>
                    <NavLink className="text-white" href="#col1">ABOUT US</NavLink>
                    <NavLink className="text-white">MENU</NavLink>
                    <NavLink className="text-white">GALLERY</NavLink>
                    <NavLink className="text-white">OUR TEAM</NavLink>
                    <NavLink className="text-white">CONTACT</NavLink>
                </Nav>
            </Container>
        </Navbar>
        </div>
        
    )
}

export default NavigationBar;