import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../components/Card";
import heartImage from "../assets/heart.png";
import lungImage from "../assets/lung.png";
import diabetesImage from "../assets/diabetes.png";
import breastImage from "../assets/breast.png";
import { UserContext } from "../context/UserContext";
import "../App.css";

function PredictorsPage() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (userInfo) {
      navigate(path);
    } else {
      toast.info("Please log in to access this predictor.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="predictor-container">
      <ToastContainer />
      <h1 className="title">Empowering Early Detection with AI-Driven Health Insights</h1>
      <p className="description">
        Our Intelligent Health Diagnostics Platform harnesses cutting-edge artificial intelligence 
        to accurately detect and forecast major health risks, including breast cancer, lung cancer, 
        cardiovascular conditions, and diabetes. Through powerful algorithms and vast medical datasets, 
        the system delivers early alerts that support proactive care and customized treatment strategies. 
        We aim to revolutionize healthcare by making it predictive, personal, and prevention-focused—improving outcomes, reducing disease impact, and enhancing lives.
      </p>
      <div className="card-container">
        <div
          onClick={() => handleLinkClick("/predictors/heart")}
          className="card"
          style={{ textDecoration: "none" }}
        >
          <Card
            image={heartImage}
            title="Heart Disease"
            description="Guarding Hearts: AI solutions for accurate prediction and early intervention in heart disease."
          />
        </div>
        <div
          onClick={() => handleLinkClick("/predictors/lung")}
          className="card"
          style={{ textDecoration: "none" }}
        >
          <Card
            image={lungImage}
            title="Lung Cancer"
            description="Clearing the Air: AI-driven insights for proactive lung cancer prediction and care."
          />
        </div>
        <div
          onClick={() => handleLinkClick("/predictors/breast")}
          className="card"
          style={{ textDecoration: "none" }}
        >
          <Card
            image={breastImage}
            title="Breast Cancer"
            description="Beyond Detection: AI innovation for early, precise breast cancer prediction and care."
          />
        </div>
        <div
          onClick={() => handleLinkClick("/predictors/diabetes")}
          className="card"
          style={{ textDecoration: "none" }}
        >
          <Card
            image={diabetesImage}
            title="Diabetes"
            description="Empowering Health: AI solutions for precise diabetes prediction and proactive wellness."
          />
        </div>
      </div>
    </div>
  );
}

export default PredictorsPage;
