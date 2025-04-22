import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import PredictorsPage from "./pages/PredictorsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import BreastPage from "./pages/BreastPage";
import LungPage from "./pages/LungPage";
import HeartPage from "./pages/HeartPage";
import DiabetesPage from "./pages/DiabetesPage";
import { UserContextProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="app-root">
          {/* Background layer */}
          <div className="background-layer"></div>
          
          {/* Content layer */}
          <div className="content-layer">
            <Routes>
              {/* Routes without Navbar */}
              <Route 
                path="/login" 
                element={
                  <div className="auth-page">
                    <LoginPage />
                  </div>
                } 
              />
              <Route 
                path="/signup" 
                element={
                  <div className="auth-page">
                    <SignupPage />
                  </div>
                } 
              />

              {/* Routes with Navbar */}
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/predictors"
                element={
                  <>
                    <Navbar />
                    <PredictorsPage />
                  </>
                }
              />
              <Route
                path="/predictors/breast"
                element={
                  <>
                    <Navbar />
                    <BreastPage />
                  </>
                }
              />
              <Route
                path="/predictors/lung"
                element={
                  <>
                    <Navbar />
                    <LungPage />
                  </>
                }
              />
              <Route
                path="/predictors/heart"
                element={
                  <>
                    <Navbar />
                    <HeartPage />
                  </>
                }
              />
              <Route
                path="/predictors/diabetes"
                element={
                  <>
                    <Navbar />
                    <DiabetesPage />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Navbar />
                    <AboutPage />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;