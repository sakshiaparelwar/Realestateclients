import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div
        style={{
          justifyContent: "center",
          textAlign: "left",
          padding: "30px",
        }}
      >
        <h1
          style={{
            marginBottom: "40px",
            fontFamily:
              "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
            textAlign: "center",
          }}
        >
          About Us
        </h1>
        <p>
          Welcome to our Residio website! We are dedicated to helping you find
          your dream home. Our team of experienced agents is committed to
          providing excellent service and guiding you through the home-buying
          process.
        </p>
        <p>
          Whether you are a first-time buyer or looking to upgrade, we have a
          wide range of properties to suit your needs. Feel free to explore our
          listings and contact us for more information.
        </p>
        <h3>About Our Services</h3>
        <p>
          Welcome to Residio, your premier destination for all your real estate
          needs. At Residio, we understand that buying or selling a home is one
          of the most significant decisions you'll make in your life. That's why
          we are dedicated to providing exceptional service, expert guidance,
          and a stress-free experience for our clients.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to help you find your dream home or sell your property
          efficiently and at the best possible price. We strive to make the real
          estate process as smooth as possible by leveraging our expertise,
          market knowledge, and cutting-edge technology.
        </p>
      </div>
      <div style={{ padding: "20px" }}>
        <h3>Why Choose Residio?</h3>
        <ul>
          <li>
            Experienced Agents: Our team of experienced and knowledgeable real
            estate agents is here to guide you.
          </li>
          <li>
            Wide Property Selection: Explore a diverse range of properties, from
            cozy homes to luxurious estates.
          </li>
          <li>
            Client-Centric Approach: We prioritize your needs and work
            tirelessly to exceed your expectations.
          </li>
          <li>
            Community Involvement: We are actively involved in the community,
            supporting local initiatives and events.
          </li>
        </ul>
        <h3>Contact Us</h3>
        <p>
          Ready to start your real estate journey with us? Contact our team
          today to schedule a consultation. We look forward to helping you
          achieve your real estate goals.
        </p>
      </div>
    </Layout>
  );
}

export default About;
