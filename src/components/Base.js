import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  // name of variant can be any name
  // property of variant can be any name
  hidden: { opacity: 0, x: "100vw" },
  visible: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.5 } },
  // animate and transition work with together
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};
const nextVariant = {
  start: { x: "-100vw" },
  end: { x: 0, transition: { type: "spring", stiffness: 120 } },
};
const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants} // we must call vairiant that we will to use it's properties
      initial="hidden" // call object of initial
      animate="visible" // call object of animate & transition
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariant}
          initial="start"
          animate="end"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariant} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
