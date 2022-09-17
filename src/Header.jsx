import { BsCart3 } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { Badge, Container,Row, FormControl, Nav, Navbar } from "react-bootstrap";
import "./Style/Header.css";
import { CartState } from './context/Context'
import { Link } from 'react-router-dom'

const Header = () => {

  const { state : { cart, wishlist } } = CartState();
  return (
    <>
      <Container fluid style={{ paddingLeft:'25px', backgroundColor: 'rgba(0,0,0,0.03)' }}>
        <Row>
          <Navbar>
            
              <div className="col-lg-3">
                <Navbar.Brand>
                  <Link to={'/'}>
                  <img
                    className="navbar-img"
                    src="https://d20g9rk0b3pszo.cloudfront.net/images/logos/486/Asset-2_8dbd-l8_1lh5-00.png?t=1662616200"
                    alt="BizBazar"
                  />
                  </Link>
                </Navbar.Brand>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-8">
                <Navbar.Text className="search">
                  <FormControl
                    style={{ width: '400px' }}
                    type="search"
                    placeholder="Search Product"
                    className="m-auto"
                    aria-label="Search"
                   
                  />
                </Navbar.Text>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-4">
                <Nav>
                  <div className="btn-cart" title="ADD TO CART">
                    <BsCart3 />
                    <Badge className="badge badge-info" bsPrefix="btn-badge">
                      {cart.length}
                    </Badge>
                  </div>

                  <div className="btn-wishlist" title="ADD TO WISHLIST">
                    <BsEmojiHeartEyes />
                    <Badge className="badge badge-info" bsPrefix="btn-badge">{wishlist.length}</Badge>

                  </div>
                </Nav>
              </div>
            
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default Header;
