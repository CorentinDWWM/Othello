import React, { useContext } from "react";
import { SquareContext } from "../../context/SquareContext";
import styles from "./Table.module.scss";

const Table = () => {
  const { isBlackNext, createTable, winner, blackPlayer, whitePlayer } =
    useContext(SquareContext);

  return (
    <div className={`${styles.jeu}`}>
      {winner ? (
        <h2 className="mb-20">Le vainqueur est le joueur {winner} !</h2>
      ) : (
        <h2 className="mb-20">
          C'est au tour de{" "}
          {isBlackNext ? (
            <span>{blackPlayer}</span>
          ) : (
            <span style={{ color: "white" }}>{whitePlayer}</span>
          )}
        </h2>
      )}
      <div className={`wFull d-flex center ${styles.table}`}>
        {createTable()}
      </div>
    </div>
  );
};

export default Table;
