import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./container/Navbar";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <SaveLastVisitedRoute />
      <Navbar />
      <Routes />
    </Router>
  );
}

// Function to save the last visited route in localStorage
function SaveLastVisitedRoute() {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastVisited", location.pathname);
  }, [location]);

  return null;
}

// Redirect to last visited page on initial load
const lastVisited = localStorage.getItem("lastVisited");
if (lastVisited && lastVisited !== window.location.pathname) {
  window.location.pathname = lastVisited;
}

export default App;
