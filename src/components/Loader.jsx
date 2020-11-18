import React from "react";
import { motion, useCycle } from "framer-motion";
const lodaerVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      yoyo: Infinity,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  /* useCycle here used to store many animation (2,3,4,...etc) and 
      switch between them by function,
      when we call this function it will cal the next animation in it's queue,
      the first animation is the default animation, in animation attribute,
      instead of passing instead of passing animation object or variants, 
      we will passing to it variable that returned from useCycle hooks to change animation */

  return (
    <>
      <motion.div
        className="loader"
        variants={lodaerVariants}
        // here we don't use (initial), because we don't matter from any point animation will start
        animate={animation} // passing returned value of the useCycle
      ></motion.div>
      <div onClick={() => cycleAnimation()}> Click To Chane Loader </div>
      {/* call function in click on this div, then get the next animation in the queue */}
    </>
  );
};

export default Loader;
