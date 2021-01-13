import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
