import React, { useState, useEffect } from "react";
import "../style/gameGrid.css";
import Presentation from "./Presentation";
const NUMEROS = {
  0: "uno ",
  1: "dos ",
  2: "tres ",
  3: "cuatro ",
  4: "cinco ",
  5: "seis ",
  6: "siete ",
  7: "ocho ",
  8: "nueve ",
};
const Game = () => {
  const [turno, setTurno] = useState("X");
  const [grid, setgrid] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(undefined);

  useEffect(() => {
    handleWinner();
  }, [turno]);

  const handleWinner = () => {
    if (grid[0] === grid[1] && grid[1] === grid[2] && grid[0] !== "") {
      setWinner(grid[0]);
    } else if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] !== "") {
      setWinner(grid[3]);
    } else if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] !== "") {
      setWinner(grid[6]);
    } else if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] !== "") {
      setWinner(grid[0]);
    } else if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== "") {
      setWinner(grid[1]);
    } else if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== "") {
      setWinner(grid[2]);
    } else if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== "") {
      setWinner(grid[0]);
    } else if (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== "") {
      setWinner(grid[2]);
    } else if (
      grid[0] !== "" &&
      grid[1] !== "" &&
      grid[2] !== "" &&
      grid[3] !== "" &&
      grid[4] !== "" &&
      grid[5] !== "" &&
      grid[6] !== "" &&
      grid[7] !== "" &&
      grid[8] !== ""
    ) {
      setWinner("empate");
    }
  };

  const handleColor = (content) => {
    if (content === "X") {
      return "red";
    } else if (content === "O") {
      return "black";
    }
  };

  const handleClick = (index) => {
    if (!winner) {
      if (grid[index] === "") {
        const newGrid = [...grid];
        newGrid[index] = turno;
        setgrid(newGrid);
        setTurno(turno === "X" ? "O" : "X");
      }
    }
  };

  return (
    <>
      <Presentation turno={turno} winner={winner} />

      <div className="wrapper">
        {grid.map((item, index) => {
          return (
            <div
              className={"cell " + NUMEROS[index] + handleColor(item)}
              key={index}
              onClick={() => handleClick(index)}>
              {item}
            </div>
          );
        })}
      </div>

      {winner && (
        <button
          onClick={() => {
            setgrid(["", "", "", "", "", "", "", "", ""]);
            setTurno(turno === "X" ? "O" : "X");
            setWinner(undefined);
          }}>
          Jugar de nuevo
        </button>
      )}
    </>
  );
};

export default Game;
