import React from "react";
import PropTypes from "prop-types";

function Footer({ name }) {
  return <h1>Hi, this is Footer!</h1>;
}

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;
