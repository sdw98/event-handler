import { useState, type MouseEvent } from "react";

const App = () => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleMouseClick = (e: MouseEvent<HTMLDivElement>) => {
    setClickPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="bg-red-100 min-h-screen flex justify-center items-center"
      onClick={handleMouseClick}
    >
      클릭해보세요! 마지막 클릭 위치: ({clickPosition.x}, {clickPosition.y})
    </div>
  );
};

export default App;
