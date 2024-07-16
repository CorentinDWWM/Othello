import { NavLink, useLocation } from "react-router-dom";
import styles from "./HeaderMobile.module.scss";
import { useContext } from "react";
import { SquareContext } from "../../../context/SquareContext";

export default function HeaderMobile({ setShowMenu }) {
  const { resetGame } = useContext(SquareContext);
  const location = useLocation();

  const handleClick = () => {
    setShowMenu(false);
    resetGame();
  };

  return (
    <>
      <ul className={`d-flex flex-column p-20 ${styles.container}`}>
        <i
          style={{ cursor: "pointer" }}
          onClick={() => setShowMenu(false)}
          className=" d-flex flex-column align-items-end fa-solid fa-xmark"
        ></i>
        <NavLink
          onClick={handleClick}
          to="/"
          className={`${styles.btnNav} mt-10`}
        >
          Accueil
        </NavLink>
        {location.pathname === "/game" ? (
          <a onClick={handleClick} className={`${styles.btnNav}`}>
            Recommencer
          </a>
        ) : null}
      </ul>
    </>
  );
}
