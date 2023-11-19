import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function Contact() {
  const [Firstname, setFirstname] = useState();
  const [Lastname, setLastname] = useState();
  const [Email, setEmail] = useState();
  const [Queries, setQueries] = useState();
  let handlesubmit = (event) => {
    axios
      .post("http://localhost:5000/users/create-users", {
        Firstname,
        Lastname,
        Email,
        Queries,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks for reaching us out, We will contact you soon.");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "-30px",
          marginTop: "40px",
          fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
        }}
      >
        Contact Us
      </h1>
      <div style={{ padding: "60px" }} className="mb-3">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label for="name" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Firstname"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="lastname" class="form-label">
              Lastname
            </label>
            <input
              type="text"
              class="form-control"
              id="Lastname"
              placeholder="Lastname"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Please describe your queries
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setQueries(e.target.value);
              }}
            ></textarea>
          </div>
          <Button
            type="submit"
            style={{
              borderRadius: "6px",
              width: "100px",
              background: "black",
              color: "white",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
      <div style={{ padding: " 0px 60px", textAlign: "left" }}>
        <h2>Get in Touch</h2>
        <Link to={"/about"}>Residio.com</Link>
        <p>C/o weblink In Pvt.Ltd.</p>
        <p>For any assistance or enquiry call us at</p>
        <p style={{ fontSize: "15px" }}>(9:30 Am to 6:00 Pm IST, Mon to Fri)</p>
        <p style={{ fontSize: "15px" }}>India: +91-2345678909</p>
      </div>
    </Layout>
  );
}

export default Contact;
