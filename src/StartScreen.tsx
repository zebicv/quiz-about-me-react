function StartScreen({ dispatch }) {
  const handleStartGame = () => {
    dispatch({ type: "startGame" });
  };

  return (
    <div className="text-white flex flex-col gap-4 text-xl items-center">
      <p className="text-3xl max-w-[600px] font-semibold">
        Ready to get to know me better?
      </p>
      <button
        onClick={handleStartGame}
        className="border-2 border-zinc-500 rounded-full w-1/4"
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
