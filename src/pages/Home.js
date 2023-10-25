import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Logo from "../Assets/logo.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Searchbar from "./Searchbar";
import Searchresult from "./Searchresult";

function Home() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link className="navbar-brand">
            {/* <img className="logos w-25" src={Logo} alt="Logo" /> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className="main" href="#">
            <b>Realestate</b>
          </Nav.Link>
          <Nav className="mx-auto">
            <Nav.Link className="nav-link active" href="/">
              Home
            </Nav.Link>
            <Nav.Link href="#">Search</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Button variant="primary">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel fade>
        <Carousel.Item>
          <div className="carouselimage">
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1520}
              height={600}
              alt=""
              text="First slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselcaption">
              <p>
                <i>Welcome to Realestate agency.</i>
              </p>
              <h2>
                <b>Discover your perfect comfort zone</b>
              </h2>
              <p>
                Be the first to get the best real estate deals before it hits{" "}
                <br />
                the mass market!
              </p>
              <p>Hot deals with one simple search!</p>
              <div className="input-wrapper">
                <Searchbar setResults={setResults} />
                <Searchresult results={results} />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselimage">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1520}
              height={600}
              alt=""
              text="Second slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselcaption">
              <h2>
                <b>The Most Trusted Agency</b>
              </h2>
              <p>We keep our values most suitable for our costomers.</p>
              <p>
                Know more about us <Link>Realestate agency</Link>{" "}
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselimage">
            <img
              src="https://images.pexels.com/photos/5524165/pexels-photo-5524165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1520}
              height={600}
              alt=""
              text="Third slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselcaption">
              <h2>
                <b>Find your home where you will love to leave</b>
              </h2>
              <p>let us help you to find your Dream Place</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="review">
        <div className="reviewleft">
          <h3>
            <b>Realestate.</b>
          </h3>
          <p>More than 40,000 trust Realestate</p>
          <div className="reviewright">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <p>5-Star Rating (2k+ Reviews)</p>
          </div>
        </div>
      </div>
      <div className="types1">
        <h2>Featured Property types</h2>
        <p>find all types of property here</p>
      </div>
      <div>
        <Button className="button1">
          <h3 className="buttontext">1BHK</h3>
        </Button>
        <Button className="button2">
          <h3 className="buttontext">2BHK</h3>
        </Button>
        <Button className="button3">
          <h3 className="buttontext">3BHK</h3>
        </Button>
        <Button className="button4">
          <h3 className="buttontext">Apartment</h3>
        </Button>
        <Button className="button5">
          <h3 className="buttontext">Farmhouse</h3>
        </Button>
      </div>
      <div className="card-container">
        <div className="cardleft">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-Villas-In-Las-Vegasepb0310.jpg"
            />
            <Card.Body>
              <Card.Title>luxurious villa</Card.Title>
              <Card.Text>
                Our luxurious villa is one of most beautifull place get your
                hands on it before it get sold
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="cardmiddle">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://assets.architecturaldigest.in/photos/61922845a69fa9f9fffb41cf/16:9/w_1920,c_limit/delhi%20farmhouse.png"
            />
            <Card.Body>
              <Card.Title>Farmhouse</Card.Title>
              <Card.Text>
                This amazing Farmhouse can be yours. Its budget friendly so grab
                it before it gets sold.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="cardright">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Interior Designs</Card.Title>
              <Card.Text>
                we will ensure you with most beautifull Interior Designs you
                want. just as you wish for.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <footer className="footer">
        <p>
          <a href="#">Back to top</a>
        </p>

        <address>Designed by Realestate agents &copy;</address>

        <p>
          @2023-2024 Realestate, Tnc. - <a href="#">Privacy</a> -
          <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
