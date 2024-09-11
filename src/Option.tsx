function Option({ option, dispatch, index, isAnswered, answer }) {
  const isAnswer = index === answer;

  const handleNewAnswer = () => {
    dispatch({ type: "newAnswer", payload: index });
  };

  return (
    <li
      className={`text-white bg-zinc-500 rounded-full pl-6 py-4 cursor-pointer hover:translate-x-2 transition-all hover:ease-out duration-300 ${
        isAnswer ? "bg-sky-500 translate-x-2" : ""
      }`}
      onClick={handleNewAnswer}
    >
      <button disabled={isAnswered}>{option}</button>
    </li>
  );
}

export default Option;
