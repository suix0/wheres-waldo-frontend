const DropdownMenu = ({
  coordinates,
  characters,
  sendCoordinatesValidation,
}) => {
  return (
    <div
      className="absolute w-fit h-auto border gap-2 bg-secondary rouned-lg top-0 left-0 isolate z-100"
      style={{
        transform: `translate(${coordinates.x + 5}px, ${coordinates.y + 5}px)`,
      }}
    >
      {characters.map((char) => {
        return (
          <img
            id={char.id}
            className={`${
              char.isFound
                ? "select-none backdrop-brightness-50 cursor-default"
                : "cursor-pointer hover:backdrop-brightness-90"
            } sm:w-[50px] w-[24px] border-b`}
            src={char.url}
            key={char.id}
            onClick={!char.isFound ? sendCoordinatesValidation : undefined}
          ></img>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
