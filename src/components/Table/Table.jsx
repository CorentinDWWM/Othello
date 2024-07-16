import React, { useContext } from "react";
import { SquareContext } from "../../context/SquareContext";

const Table = () => {
  const { isBlackNext, createTable, winner } = useContext(SquareContext);
  return (
    <>
      {winner ? (
        <h2 className="mb-20">Le vainqueur est le joueur {winner} !</h2>
      ) : (
        <h2 className="mb-20">
          C'est au tour du joueur en{" "}
          {isBlackNext ? (
            <span>noir</span>
          ) : (
            <span style={{ color: "white" }}>blanc</span>
          )}
        </h2>
      )}
      <div className="wFull d-flex center">{createTable()}</div>
    </>
  );
};

export default Table;
