import React from "react";
import PropTypes from "prop-types";
import useStyles from "./F.style";

function F({ name }) {
  const classes = useStyles();
  return <h1 className={classes.firstClass}>This is F Component!!</h1>;
}

F.propTypes = {
  name: PropTypes.string
};

export default F;
