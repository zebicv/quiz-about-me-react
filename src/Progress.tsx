function Progress({ questions, index, score, maxScore }) {
  const questionsLength = questions.length;
  const questionNumber = parseInt(index + 1);

  return (
    <div className="text-white mb-10 w-full">
      <progress
        className="w-full rounded-full overflow-hidden"
        value={index}
        max={questionsLength}
      ></progress>
      <div className="flex justify-between">
        <p>
          Question <strong>{questionNumber}</strong> / {questionsLength}
        </p>
        <p>
          Score {score}/{maxScore}
        </p>
      </div>
    </div>
  );
}

export default Progress;
