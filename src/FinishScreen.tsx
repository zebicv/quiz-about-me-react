function FinishScreen({ score, maxPossibleScore, dispatch, highscore }) {
  const percentage = ((score / maxPossibleScore) * 100).toFixed(2);

  const handleOnRestartGame = () => {
    dispatch({ type: "restartGame" });
  };

  return (
    <div>
      <p className="text-white bg-sky-500 px-10 sm:px-20 py-4 rounded-full mb-2">
        You scored <span className="font-semibold">{score}</span> out of{" "}
        <span className="font-semibold">{maxPossibleScore}</span> ({percentage}
        %)
      </p>
      <p className="text-white text-center mb-8">
        Highscore: {highscore} points
      </p>

      <div className="flex justify-end">
        <button
          className="bg-zinc-500 text-white px-6 py-4 rounded-full"
          onClick={handleOnRestartGame}
        >
          Restart the game
        </button>
      </div>
    </div>
  );
}

export default FinishScreen;
