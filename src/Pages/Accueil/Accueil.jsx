import React, { useContext, useEffect } from "react";
import styles from "./Accueil.module.scss";
import { Link } from "react-router-dom";
import { SquareContext } from "../../context/SquareContext";

export default function Accueil() {
  const { resetGame } = useContext(SquareContext);

  return (
    <div className="d-flex flex-column center table mhFull wFull">
      <h1>Othello / Reversi</h1>
      <Link onClick={resetGame} to="/game" className="btn btn-primary mt-10">
        Nouvelle Partie
      </Link>
    </div>
  );
}
