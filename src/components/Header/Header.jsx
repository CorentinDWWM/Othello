import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import { SquareContext } from "../../context/SquareContext";

function Header() {
  const { resetGame } = useContext(SquareContext);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-rr align-items-center`}>
      <div className={`${styles.responsive} d-flex flex-rr flex-fill`}>
        <div>
          <Link to="/" onClick={resetGame}>
            Accueil
          </Link>
          {location.pathname === "/game" ? (
            <a className="ml-15" onClick={resetGame}>
              Recommencer
            </a>
          ) : null}
        </div>
      </div>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
      ></i>
      {showMenu && (
        <>
          <HeaderMobile setShowMenu={setShowMenu} />
        </>
      )}
    </header>
  );
}

export default Header;
