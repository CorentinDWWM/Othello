import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import styles from "./Jeu.module.scss";

export default function Jeu() {
  return (
    <div className="table mhFull wFull d-flex center flex-column ta-center">
      <>
        <div className={`d-flex wFull ${styles.container}`}>
          <Table />
          <p className={`${styles.regles}`}>
            1 - Le <span>joueur</span> avec les pions <span>Noir</span> commence{" "}
            <span>toujours</span> la partie. <br /> <br /> 2 - Les joueurs
            jouent à <span>tour de rôle</span>, chacun étant tenu de{" "}
            <span>capturer des pions adverses</span> lors de son mouvement.{" "}
            <br /> <br />3 - Si un joueur <span>ne peut pas capturer</span> de
            pion(s) adverse(s), il est forcé de <span>passer son tour</span>.{" "}
            <br /> <br />4 - Si <span>aucun des deux joueurs</span> ne peut
            jouer, ou si <span>l'othellier ne comporte plus</span> de case vide,
            la partie <span>s'arrête</span>. <br /> <br />5 - Le{" "}
            <span>gagnant</span> en fin de partie est celui qui possède{" "}
            <span>le plus de pions</span>. <br /> <br />6 - La{" "}
            <span>capture de pions</span> survient lorsqu'un joueur place{" "}
            <span>un de ses pions</span> à l'extrémité d'un alignement de{" "}
            <span>pions adverses</span> contigus et dont l'autre extrémité est
            déjà occupée par un de <span>ses propres pions</span>. <br /> <br />{" "}
            6.5 - Les <span>alignements considérés</span> peuvent être{" "}
            <span>une colonne</span>,<span>une ligne</span>, ou{" "}
            <span>une diagonale</span>. <br /> <br />7 - Si{" "}
            <span>le pion nouvellement placé</span> vient fermer{" "}
            <span>plusieurs alignements</span>, il capture{" "}
            <span>tous les pions adverses des lignes ainsi fermées</span>.{" "}
            <br /> <br /> 7.5 - <span>La capture</span> se traduit par le{" "}
            <span>retournement des pions capturés</span>. <br /> <br />8 -{" "}
            <span>Ces retournements</span> n'entraînent pas d'effet de capture
            en cascade : <span>seul le pion nouvellement posé</span> est pris en
            compte.
          </p>
        </div>
      </>
    </div>
  );
}
