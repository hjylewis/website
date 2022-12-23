import styles from './Icon.module.scss';
import React from "react";

const Icon = ({ icon }) => (
  <svg className={styles["icon"]} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
