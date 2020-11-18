import React, { useEffect } from "react";
import { motion } from "framer-motion";

/* in variants, if children variant object has the same property name and
    the same use of these properties in children is same as the parent,
    so we can define attribute in parent only and we cannot define it in children
    for EX-> (containerVariants) has 2 property [hidden, visible],
              and [hidden] used in {initial}, [visible] used in {animate}, 
              and (childrenVariant) has the same properties (hidden, visible) 
              and we will use them in [initial and animate],
              so we must write {animate and initial} in the parent container
              and delete them from the children items if we want
              - as we use in [order container] & [map of toppings] - */

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, // like duration that animation take to finish
      damping: 5,
      // responsible for moving of the box, lower number is more moving than larger number
      when: "beforeChildren",
      // "beforeChildren" --> finish this transition at first then start children trnasition
      // 'afterChildren' --> finish this transition after children trnasition then start parent
      staggerChildren: 0.4, // time in seconds between each children to start it's transition
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};
const childrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setModal }) => {
  useEffect(() => {
    setTimeout(() => setModal(true), 3000);
  }, [setModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariant}>
        {pizza.toppings.map(topping => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
