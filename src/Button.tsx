function Button({ dispatch, isAnswered }) {
  const handleToNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };

  return (
    <button
      className={`bg-zinc-500 px-6 py-4 rounded-full text-white self-end ${
        isAnswered ? "opacity-100" : "opacity-0"
      } `}
      onClick={handleToNextQuestion}
    >
      Next
    </button>
  );
}

export default Button;
