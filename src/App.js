import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal.jsx";
import { AnimatePresence } from "framer-motion";
function App() {
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = base => {
    setPizza({ ...pizza, base });
  };
  const addTopping = topping => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal modal={modal} setModal={setModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setModal(false)}>
        {/* it's used to make animation for routing elements when element Leave the DOM */}
        {/* used with (exit) animation attribute */}
        {/* exitBeforeEnter --> used to make element exit at first then Enter the next element */}
        {/* onExitComplete --> it will rerender included function every time when
            path of router changed */}
        <Switch location={location} key={location.key}>
          {/* location here used to know which routing element leave the dom,
            it tell AnimatePresence which routing element will leave the DOM */}
          <Route exact path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route exact path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route exact path="/order">
            <Order pizza={pizza} setModal={setModal} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
