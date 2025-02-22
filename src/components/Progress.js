function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Câu hỏi <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Đúng <strong>{points}</strong> / 384
      </p>
    </header>
  );
}

export default Progress;
