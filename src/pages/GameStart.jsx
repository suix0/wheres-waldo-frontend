import { useState } from "react";
import Photo from "../components/Photos/Photo";
import { useOutletContext } from "react-router-dom";

const GameStart = () => {
  let { game } = useOutletContext();
  const [gameLocalStorage, setGame] = useState(game);

  if (Object.keys(gameLocalStorage).length === 0) {
    setGame(JSON.parse(localStorage.getItem("game")));
  }

  return (
    <>
      <p>Characters to find:</p>
      <div className="flex gap-10">
        {Object.keys(gameLocalStorage).length !== 0 &&
          gameLocalStorage.Character.map((char) => {
            char.isFound = false;
            return (
              <img
                src={char.url}
                key={char.id}
                id={char.id}
                className="w-[58px] h-auto"
              />
            );
          })}
      </div>
      <section className="flex justify-center items-center px-20 py-10">
        <Photo game={gameLocalStorage}></Photo>
      </section>
    </>
  );
};

export default GameStart;
