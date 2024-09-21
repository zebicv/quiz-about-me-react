import Option from "./Option";

function Question({ question, dispatch, answer }) {
  const isAnswered = answer !== null ? true : false;
  const correctAnswer = question["correctOption"]; //1

  return (
    <div className="flex flex-col min-w-[600px] mb-5">
      <p className="text-white mb-4 text-xl font-semibold">
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
