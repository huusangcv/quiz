function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Hệ thống bài thi trắc nghiệm quản lý dự án phần mềm</h2>
      <h3>{numQuestions} câu hỏi kiểm tra kiến thức của bạn</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}>
        Bắt đầu
      </button>
      <div style={{ marginTop: 12 }}>
        <h3>
          *Lưu ý: Nếu đang làm mà bị restart thì có thể bắt đầu lại và chọn từ câu muốn làm tiếp{' '}
          {'( Mặc định các câu trước đó sẽ tính là sai )'}.
        </h3>
      </div>

      <span>© by huusangcv</span>
    </div>
  );
}

export default StartScreen;
