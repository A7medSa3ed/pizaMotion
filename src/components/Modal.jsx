import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modalVariant = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "200px", transition: { delay: 0.5 } },
};
const Modal = ({ modal, setModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          className="backdrop"
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariant}>
            <p>Create New Order</p>
            <Link to="/">
              <button>Start</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
