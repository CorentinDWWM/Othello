import React from "react";
import styles from "./Square.module.scss";

const Square = ({ value, onClick }) => {
  return (
    <button className={`${styles.square}`} onClick={onClick}>
      {value && (
        <div
          className={`${styles.piece} ${
            value === "B" ? `${styles.black}` : `${styles.white}`
          }`}
        ></div>
      )}
    </button>
  );
};

export default Square;
