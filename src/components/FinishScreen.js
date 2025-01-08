function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = 384 - points;

  let emoji;
  if (percentage === 384) emoji = '🤦‍♂️';
  if (percentage >= 300 && percentage < 384) emoji = '🙃';
  if (percentage >= 200 && percentage < 300) emoji = '🤨';
  if (percentage >= 50 && percentage < 200) emoji = '🎉';
  if (percentage === 0) emoji = '🥇';

  return (
    <div className="result_container">
      <p className="result">
        <span>{emoji}</span> Bạn đã sai <strong>{384 - points}</strong> trong tổng 384 câu
      </p>
      <p className="highscore">(Số câu đúng: {highscore} câu)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'restart' })}>
        Làm lại
      </button>
    </div>
  );
}

export default FinishScreen;
