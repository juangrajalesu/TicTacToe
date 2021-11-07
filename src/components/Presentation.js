import React from "react";

const Presentation = ({ turno, winner }) => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <h2 className='Alerta'>
          {winner === "empate" ? "Empate" : `El ganador es ${winner}`}
        </h2>
      ) : (
        <h2>{`Es el turno de ${turno}`}</h2>
      )}
    </div>
  );
};

export default Presentation;
