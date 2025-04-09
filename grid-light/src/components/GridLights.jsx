import { useEffect, useState } from "react";

const GridLights = ({size}) => {
    const [grid, setGrid] = useState(Array(size*size).fill(false));
    const [activationOrder, setActivationOrder] = useState([])
    console.log(grid)

    const handleClick = (index) => {
      const newGrid = [...grid];
      newGrid[index] = true;
      setGrid(newGrid);
      setActivationOrder([...activationOrder, index])
    }

    useEffect(() => {
      if(grid.length === activationOrder.length) {
        let i = grid.length-1;
        console.log(i)

        const interval = setInterval(() => {
          const indexToActivate = activationOrder[i];
          setGrid((prev) => {
            const newGrid = [...prev];
            newGrid[indexToActivate] = false;
            return newGrid;
          });
          i--;
          if(i<0) {
            clearInterval(interval);
            setActivationOrder([]);
          }
        },300)
      }
    },[activationOrder])

    console.log(activationOrder)
    return (
        <div className="grid-container" style={{ gridTemplateColumns: `repeat(${size}, 60px)`} }>
        {grid.map((isActive, index) => (
            <div className={`grid ${isActive ? 'active': ''}`} onClick={() =>handleClick(index)} ></div>
        ))}
        </div>
    )
}

export default GridLights;