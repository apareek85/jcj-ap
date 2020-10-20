import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import Greeting from "./Greeting";
import ABC from "./ABC";
import Header from "./Header";
import Footer from "./Footer";
import F from "./F";
import NumSign from "./NumSign";
import Button from "@material/react-button";
import "./index.css";
import "@material/react-button/dist/button.css";

/* function SuperLemon(props) {
  const [number, setNumber] = useState(0);
  const [squaredNum, setSquaredNum] = useState(0);
  useEffect(() => {
    setSquaredNum(number * number);
  }, [number]);
  return (
    <div className="nonsense">
      <Greeting name={props.name} />
      <ABC name="ashutosh pareek" />
      <Message />
      <div>
        <NumSign number={number} capture="number" />
        <NumSign number={squaredNum} capture="squared" />
      </div>
      <Button
        className="button"
        raised={true}
        onClick={() => setNumber(number - 1)}
      >
        -
      </Button>
      <Button
        className="button"
        raised={true}
        onClick={() => setNumber(number + 1)}
      >
        +
      </Button>
    </div>
  );
}

SuperLemon.propTypes = {
  name: PropTypes.string
}; */

function HelloWorld(props) {
  return (
    <div className="nonsense">
      Hello Wrold Component.........
    </div>
  );
}

export { ABC, F, Greeting, Message, HelloWorld, Header, Footer };