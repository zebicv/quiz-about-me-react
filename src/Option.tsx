function Option({
  option,
  dispatch,
  index,
  isAnswered,
  answer,
  correctAnswer,
}) {
  const isSelectedOption = index === answer;
  const isCorrectOption = index === correctAnswer;

  const handleNewAnswer = () => {
    dispatch({ type: "newAnswer", payload: index });
  };

  return (
    <li>
      <button
        disabled={isAnswered}
        className={`text-white bg-zinc-500 text-left w-full rounded-full pl-6 py-4 ${
          isCorrectOption && isAnswered
            ? "bg-green-500 translate-x-2  transition-all  duration-300"
            : ""
        } ${
          isAnswered
            ? "cursor-not-allowed"
            : "cursor-pointer hover:translate-x-2 hover:ease-out transition-all duration-300"
        }
        ${
          isSelectedOption && !isCorrectOption
            ? "bg-red-500 translate-x-2  transition-all  duration-300"
            : ""
        }
        `}
        onClick={handleNewAnswer}
      >
        {option}
      </button>
    </li>
  );
}

export default Option;
