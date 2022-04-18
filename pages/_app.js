import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img style={{height: 30}} src="https://static.wixstatic.com/media/2d5018_60cbabcc5c6b4ed7aa0b7f7ea000e167~mv2.png/v1/crop/x_74,y_665,w_2111,h_1208/fill/w_104,h_58,al_c,usm_0.66_1.00_0.01,enc_auto/SST%20INC%20Logo%20(Black).png"></img>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/Courses">Courses</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
