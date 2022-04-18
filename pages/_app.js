import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
