import React from "react";
import PropTypes from "prop-types";

function Greeting({ name }) {
  return <h1>This is Greeting Component</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
