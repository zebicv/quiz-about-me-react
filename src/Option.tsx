function Option({ option, dispatch, index, isAnswered, answer }) {
  const isSelectedOption = index === answer;

  const handleNewAnswer = () => {
    dispatch({ type: "newAnswer", payload: index });
  };

  return (
    <li>
      <button
        disabled={isAnswered}
        className={`text-white text-left w-full rounded-full pl-6 py-4 ${
          isSelectedOption
            ? "bg-sky-500 translate-x-2  transition-all  duration-300"
            : "bg-zinc-500"
        } ${
          isAnswered
            ? "cursor-not-allowed"
            : "cursor-pointer hover:translate-x-2 hover:ease-out transition-all duration-300"
        }`}
        onClick={handleNewAnswer}
      >
        {option}
      </button>
    </li>
  );
}

export default Option;
