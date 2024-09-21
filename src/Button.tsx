import { ButtonProps } from "./types";

function Button({ dispatch, isAnswered }: ButtonProps) {
  const handleToNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };

  return (
    <button
      disabled={!isAnswered}
      className={`bg-zinc-500 px-6 py-4 rounded-full text-white self-end ${
        !isAnswered
          ? "cursor-not-allowed opacity-50"
          : "opacity-100 cursor-pointer"
      } `}
      onClick={handleToNextQuestion}
    >
      Next
    </button>
  );
}

export default Button;
