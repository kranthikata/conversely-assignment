import React, { useState } from "react";

function App() {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill("white")));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    if (matrix[row][col] !== "white") return;

    const newMatrix = matrix.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? "green" : cell))
    );

    const newClickOrder = [...clickOrder, { row, col }];

    if (row === 2 && col === 2) {
      newClickOrder.forEach((cell, index) => {
        setTimeout(() => {
          setMatrix((prev) =>
            prev.map((r, i) =>
              r.map((c, j) => (i === cell.row && j === cell.col ? "orange" : c))
            )
          );
        }, index * 500);
      });
    } else {
      setMatrix(newMatrix);
      setClickOrder(newClickOrder);
    }
  };

  // console.log(matrix);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "3px",
      }}
    >
      {matrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex} - ${colIndex}`}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: cell,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            {`${rowIndex}, ${colIndex}`}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
