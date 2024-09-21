function StartScreen({ dispatch }) {
  const handleStartGame = () => {
    dispatch({ type: "startGame" });
  };

  return (
    <div className="text-white flex flex-col gap-4">
      <p>Start the quiz!</p>
      <button onClick={handleStartGame}>Start</button>
    </div>
  );
}

export default StartScreen;
