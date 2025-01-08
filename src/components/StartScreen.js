function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Hệ thống bài thi trắc nghiệm quản lý dự án phần mềm</h2>
      <h3>{numQuestions} câu hỏi kiểm tra kiến thức của bạn</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}>
        Bắt đầu
      </button>
    </div>
  );
}

export default StartScreen;
