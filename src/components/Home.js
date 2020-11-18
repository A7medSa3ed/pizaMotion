import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
  /* (exit) here refer to animation that will run 
    when this element exit from DOM, it has own transition */
};

const buttonVariant = {
  hover: {
    scale: 1.1, //[1.1, 1, 1.1, 1, 1.1, 1], this is way
    // this call keyframe, make scale many times depend on it's array of value
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      // in [yoyo] we can specify how many times animation will repeat.
      // we can define any number here, or make inifinity to repeat it forever
      // it's used instead of array of keyframe like:-[1.1, 1, 1.1, 1, 1.1, 1] === yoyo:6;
      // yoyo here repeat scale from (1.1) to it's original scal (1)
      // if we write scal as a keyframe array, it will repeat this array depened on yoyo value
    },
  },
};
const Home = () => {
  return (
    // Rules to use framer motion:-
    // we should add (motion.) before tag which we want to animate like <motion.h2></motion.h2>
    /* we should add all animated property as object and pass this object to (animate attribute)
        like:- <motion.h2 animate={{fontSize:40, scale:1.6, rotateZ:180}}></motion.h2>*/
    // in (animate) attribute we can use any css property as a camelCase attribute.
    /* we can move in screen by (x:value, y:value) negative value for up and left and vice versa
        it look like transform: translateX, translateY */
    /* we can define from any point animation can start 
      by using (initial) attribute and pass object to it */
    /* we can use transition to control the animation by passing object to it,
        this object include many controls like:-
        ( delay, duration, type of transition, striffness of transtiion)
        [type: 'spring']--> work with item's that moving in screen [it's default value for it]
        [type: 'tween']--> work with things that can't to move in screen [it's default value for it]
        striffness--> work with [spring type],
        striffness--> doesn't work with [tween type] */
    /* we can use (whileHover) to make animation when user hover on item, 
        by passing css attributes to (whileHover) object */
    /* we can use (variants) attribute and pass all motion object inside it,
        then call property from this object in it's correct place as in (base component) */

    <motion.div
      className="home container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
