import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ addGood, addNeutral, addBad }) => {
  return (
    <>
      <button className={styles.buttonGood} onClick={addGood}>
        Good
      </button>
      <button className={styles.buttonNeutral} onClick={addNeutral}>
        Neutral
      </button>
      <button className={styles.buttonBad} onClick={addBad}>
        Bad
      </button>
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
};
