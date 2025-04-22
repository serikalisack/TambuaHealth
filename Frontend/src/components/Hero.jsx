import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
// import homepageImage from "../assets/homepage.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
      <h1>AI Medical Lab</h1>
  <h3 class="subheading">Smart Diagnostics for a Healthier Tomorrow</h3>
  <p>
    Experience a <strong>revolution in healthcare</strong> with our comprehensive, AI-powered diagnostic suite. Designed for <strong>fast, accurate detection</strong> and <strong>early prevention</strong> of multiple diseases, including cancer, heart conditions, and diabetes.
  </p>

          <Link to="/predictors" style={{ textDecoration: "none" }}>
            <div className="pos">
              <button className="btn btn-primary">Diagnose Now</button>
            </div>
          </Link>
      </div>
      {/* <div className="hero-image">
        <img src={homepageImage} alt="AI Multi-Disease Diagnostic Suite" />
      </div> */}
    </section>
  );
}

export default Hero;
