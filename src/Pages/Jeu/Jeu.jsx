import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";

export default function Jeu() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  // pour le mode paysage
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  const handleOrientationChange = () => {
    setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
  };

  useEffect(() => {
    handleResize();
    handleOrientationChange();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <div className="table mhFull wFull d-flex center flex-column ta-center">
      {isMobile ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 1)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <p>Veuillez tourner votre appareil en mode paysage</p>
        </div>
      ) : isPortrait ? (
        <Table />
      ) : (
        <Table />
      )}
    </div>
  );
}
