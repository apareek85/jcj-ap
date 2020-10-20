import React from "react";
import PropTypes from "prop-types";
import useStyles from "./ABC.style";

function ABC({ name }) {
  const classes = useStyles();
  return <h1 className={classes.firstClass}>ABC Component!</h1>;
}

ABC.propTypes = {
  name: PropTypes.string
};

export default ABC;
