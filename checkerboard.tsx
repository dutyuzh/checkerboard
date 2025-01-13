import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface SquareProps {
  id: number;
  count: number;
}

const CheckerboardWrapper = styled.div`
  width: 800px;
  height: 800px;
  border: 5px solid black;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: gray;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const Checkerboard = () => {
  const [squares, setSquares] = useState<SquareProps[]>([]);

  useEffect(() => {
    const initialSquares = Array.from({ length: 64 }, (_, index) => ({
      id: index + 1,
      count: 0,
    }));
    setSquares(initialSquares);
  }, []);

  const handleSquareClick = (id: number, currentSquareCount: number) => {
    setSquares(
      squares.map((square) =>
        square.id === id ? { ...square, count: currentSquareCount } : square
      )
    );
  };

  return (
    <CheckerboardWrapper>
      {squares.map((square, index) => (
        <Square
          onClick={() => {
            handleSquareClick(square.id, square.count + 1);
          }}
          key={square.id}
          style={{
            color:
              (Math.floor(index / 8) + index) % 2 === 0 ? "white" : "black",
            backgroundColor:
              (Math.floor(index / 8) + index) % 2 === 0 ? "black" : "white",
          }}
        >
          <label>count: {square.count}</label>
        </Square>
      ))}
    </CheckerboardWrapper>
  );
};

export default Checkerboard;
