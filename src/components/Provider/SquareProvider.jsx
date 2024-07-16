import { useState } from "react";
import { SquareContext } from "../../context/SquareContext";
import Square from "../Square/Square";

export default function SquareProvider({ children }) {
  const initialSquares = () => {
    const squares = Array(64).fill(null);
    squares[27] = "W";
    squares[28] = "B";
    squares[35] = "B";
    squares[36] = "W";
    return squares;
  };

  const [squares, setSquares] = useState(initialSquares);
  const [isBlackNext, setIsBlackNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // pour redémarrer la partie
  const resetGame = () => {
    setSquares(initialSquares());
    setIsBlackNext(true);
    setWinner(null);
  };

  // pour savoir le vainqueur
  const calculateWinner = (squares) => {
    const blackCount = squares.filter((square) => square === "B").length;
    const whiteCount = squares.filter((square) => square === "W").length;
    if (blackCount > whiteCount) {
      return `Noir avec ${blackCount} pions contre ${whiteCount} pions Blanc`;
    } else if (whiteCount > blackCount) {
      return `Blanc avec ${whiteCount} pions contre ${blackCount} pions Noir`;
    } else {
      return `Égalité avec ${blackCount} chacun`;
    }
  };

  const hasValidMove = (squares, color) => {
    const directions = [-1, 1, -8, 8, -9, -7, 9, 7];

    const isValidMove = (i) => {
      if (squares[i] !== null) return false;

      const oppositeColor = color === "B" ? "W" : "B";
      return directions.some((direction) => {
        let pos = i + direction;
        let foundOpposite = false;

        while (pos >= 0 && pos < 64 && squares[pos] === oppositeColor) {
          foundOpposite = true;
          pos += direction;
        }
        return foundOpposite && squares[pos] === color;
      });
    };

    return squares.some((square, i) => isValidMove(i));
  };

  const checkGameOver = (squares) => {
    return (
      squares.every((square) => square !== null) ||
      (!hasValidMove(squares, "B") && !hasValidMove(squares, "W"))
    );
  };

  // gestion des clicks sur les pièces
  const handleClick = (i) => {
    if (squares[i] || winner) return; // Pour une case déjà occupée ou si il y a un vainqueur

    const newSquares = squares.slice();
    const currentColor = isBlackNext ? "B" : "W";
    const oppositeColor = isBlackNext ? "W" : "B";

    // Pour vérifier et retourner les pièces dans une direction
    const flipLine = (start, step) => {
      let pos = start + step;
      let line = [];
      while (pos >= 0 && pos < 64 && newSquares[pos] === oppositeColor) {
        line.push(pos);
        pos += step;
      }
      if (newSquares[pos] === currentColor) {
        line.forEach((index) => {
          newSquares[index] = currentColor;
        });
      }
    };

    // Directions à vérifier pour le retournement
    const directions = [-1, 1, -8, 8, -9, -7, 9, 7];
    directions.forEach((direction) => flipLine(i, direction));

    // Placer la nouvelle pièce
    newSquares[i] = currentColor;
    setSquares(newSquares);
    setIsBlackNext(!isBlackNext);

    // Vérifier si le jeu est terminé
    if (checkGameOver(newSquares)) {
      setWinner(calculateWinner(newSquares));
    }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  // création de l'othellier
  const createTable = () => {
    let board = [];
    for (let row = 0; row < 8; row++) {
      let rowSquares = [];
      for (let col = 0; col < 8; col++) {
        rowSquares.push(renderSquare(row * 8 + col));
      }
      board.push(
        <div className="board-row" key={row}>
          {rowSquares}
        </div>
      );
    }
    return board;
  };

  return (
    <SquareContext.Provider
      value={{
        createTable,
        isBlackNext,
        resetGame,
        winner,
        checkGameOver,
      }}
    >
      {children}
    </SquareContext.Provider>
  );
}
