import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />)
}

export default MyApp
