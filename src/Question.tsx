import Option from "./Option";

function Question({ question, dispatch, answer }) {
  const isAnswered = answer !== null ? true : false;
  const correctAnswer = question["correctOption"]; //1

  return (
    <div className="flex flex-col mb-5 w-full">
      <p className="text-white mb-4 text-xl font-semibold text-wrap sm:text-left">
        {question?.question}
      </p>
      <ul className="flex flex-col gap-3 mb-4">
        {question.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            dispatch={dispatch}
            index={index}
            isAnswered={isAnswered}
            answer={answer}
            correctAnswer={correctAnswer}
          />
        ))}
      </ul>
    </div>
  );
}

export default Question;
