import React from "react";
import { motion } from "framer-motion";
const svgVariant = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};
const pathVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag // this attribute of framer-motion used to drag element in any position of the screen
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 50 }}
        /* dragConstraints --> used to specify the limits of screen 
                                that allow user able to drag element on it */
        dragElastic={2}
        // dragElastic --> refer to elastic of dragging, large number more elastic than lower
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariant}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariant}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        // the next 3 line is a way to make animation instead of using variants
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
