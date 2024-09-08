import Option from "./Option";

function Question({ question }) {
  return (
    <div>
      <p className="text-white mb-4 text-xl font-semibold">
        {question?.question}
      </p>
      <ul>
        {question.options.map((option) => (
          <Option option={option} />
        ))}
      </ul>
    </div>
  );
}

export default Question;
