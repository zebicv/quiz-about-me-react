import Option from "./Option";
import Button from "./Button";

function Question({ question, dispatch, answer }) {
  const isAnswered = answer !== null ? true : false;

  console.log(question);
  return (
    <div className="flex flex-col min-w-[600px]">
      <p className="text-white mb-4 text-xl font-semibold">
        {question?.question}
      </p>
      <ul className="flex flex-col gap-3 mb-4">
        {question.options.map((option, index) => (
          <Option
            option={option}
            dispatch={dispatch}
            index={index}
            key={index}
            isAnswered={isAnswered}
          />
        ))}
      </ul>
      <Button dispatch={dispatch} isAnswered={isAnswered} />
    </div>
  );
}

export default Question;
