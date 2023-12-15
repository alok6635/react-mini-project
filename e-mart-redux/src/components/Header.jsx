import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
   const cartProduct=useSelector(state=>state.cart)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand to="/">Redux toolkit</Navbar.Brand>
                    <Nav>
                        <Nav.Link to="/dashboard" as={Link}>products</Nav.Link>
                    </Nav>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>Mybags {cartProduct.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;