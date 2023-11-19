import React from "react";
import Card from "react-bootstrap/Card";

function FlatsCards(props) {
  return (
    <div>
      <div className="cardleft overflow row">
        <Card style={{ width: "325px", margin: "20px", overflow: "hidden" }}>
          <img src={props.img} alt="" className="img" />
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
            <span className="price">{props.Price}</span>
            <span className="discount">{props.Discount}</span>
            <br />
            <button className="buynowbutton">Buy Now</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FlatsCards;
