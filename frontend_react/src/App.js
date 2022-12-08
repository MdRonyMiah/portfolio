import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("loading");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="rony">
          <HashLoader color={"#313bac"} loading={loading} size={70} />
        </div>
      ) : (
        <>
          {console.log("page")}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Header />} />
            </Routes>
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
