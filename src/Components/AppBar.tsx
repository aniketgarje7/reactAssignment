import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

type NavBarProps = {
    categories?:string[];
    onChangeCategory?:(e:string | undefined)=>void;
    isCategory?:boolean;
}
function AppBar({categories=[],onChangeCategory=()=>{},isCategory=true}:NavBarProps) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark text-white"  >
      <Container >
        <Navbar.Brand href="/" className='text-white'>E-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            {isCategory && <NavDropdown title="Category" id="nav-dropdown" className='dropdown_appbar text-white'  onSelect={(e)=>onChangeCategory(e?e:undefined)}>
              {categories.map((item,key)=>
              <NavDropdown.Item key={item+key} eventKey={item} >
                {item}
              </NavDropdown.Item>)}
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;