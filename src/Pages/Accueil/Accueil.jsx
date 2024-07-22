import React, { useContext, useEffect } from "react";
import styles from "./Accueil.module.scss";
import { Link } from "react-router-dom";
import { SquareContext } from "../../context/SquareContext";

export default function Accueil() {
  const {
    resetGame,
    blackPlayer,
    whitePlayer,
    setBlackPlayer,
    setWhitePlayer,
  } = useContext(SquareContext);

  return (
    <div className="d-flex flex-column center table mhFull wFull">
      <h1>Othello / Reversi</h1>
      <div className="d-flex">
        <div className="d-flex flex-column mr-15">
          <label className={`${styles.label}`} htmlFor="pseudoUn">
            Joueur Noir
          </label>
          <input
            type="text"
            onChange={(e) => setBlackPlayer(e.target.value)}
            value={blackPlayer}
            className={`${styles.input}`}
          />
        </div>
        <div className="d-flex flex-column">
          <label className={`${styles.label}`} htmlFor="pseudoDeux">
            Joueur Blanc
          </label>
          <input
            type="text"
            onChange={(e) => setWhitePlayer(e.target.value)}
            value={whitePlayer}
            className={`${styles.input}`}
          />
        </div>
      </div>
      <Link onClick={resetGame} to="/game" className="btn btn-primary mt-10">
        Nouvelle Partie
      </Link>
    </div>
  );
}
