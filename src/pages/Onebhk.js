import React from "react";
import FlatsCards from "../pages/FlatsCards";
import Layout from "../components/Layout";

function Onebhk() {
  return (
    <Layout>
      <center>
        <h2
          style={{
            fontSize: "50px",
            color: "red",
            textDecoration: "underline",
          }}
        >
          1BHK House
        </h2>
      </center>

      <div
        className="card-deck"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          borderRadius: "25px",
        }}
      >
        <FlatsCards
          img={
            "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$1000"}
          Discount={"$890"}
        />
        <FlatsCards
          img={
            "https://images.pexels.com/photos/8031875/pexels-photo-8031875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$80"}
          Discount={"$50"}
        />
        <FlatsCards
          img={
            "https://images.pexels.com/photos/3935346/pexels-photo-3935346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$100"}
          Discount={"$90"}
        />
        <FlatsCards
          img={
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$100"}
          Discount={"$90"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          borderRadius: "25px",
        }}
      >
        <FlatsCards
          img={
            "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$100"}
          Discount={"$90"}
        />
        <FlatsCards
          img={
            "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$1000"}
          Discount={"$890"}
        />
        <FlatsCards
          img={
            "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$80"}
          Discount={"$50"}
        />
        <FlatsCards
          img={
            "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Title={"1BHK home"}
          Text={
            "🏡Discover modern living in this stylish 1-bedroom haven. With a spacious layout, contemporary kitchen, property is perfect for first-time buyers or those seeking a cozy retreat.🌟"
          }
          Price={"$100"}
          Discount={"$90"}
        />
      </div>
    </Layout>
  );
}

export default Onebhk;
