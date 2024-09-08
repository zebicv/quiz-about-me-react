function Progress({ questions, index, score }) {
  const questionsLength = questions.length;
  const questionNumber = parseInt(index + 1);
  const maxScore = questions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.points,
    0
  );

  return (
    <div className="text-white mb-10 w-full">
      <progress
        className="w-full"
        value={index}
        max={questionsLength}
      ></progress>
      <div className="flex justify-between">
        <p>
          Question {questionNumber}/{questionsLength}
        </p>
        <p>
          Score {score}/{maxScore}
        </p>
      </div>
    </div>
  );
}

export default Progress;
