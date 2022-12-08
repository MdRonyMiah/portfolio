import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";
import "./Navbar.scss";

const variants = {
  open: { opacity: 1, x: [500, 0] },
  closed: { opacity: 1, x: "100%" },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" id="header">
          <img src={images.logo3} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* {toggle && ( */}
        <motion.div
          // whileInView={{ x: [300, 0] }}
          animate={toggle ? "open" : "closed"}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          variants={variants}
        >
          <HiX onClick={() => setToggle(false)} />

          <ul>
            {["home", "about", "work", "skills", "testimonial", "contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
