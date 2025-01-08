import { useState } from 'react';
import data from './data.json';
const Sidebar = ({ dispatch }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="icons" onClick={() => setShow(!show)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" />
        </svg>
      </div>

      <div className="side-bar" style={{ position: 'absolute', display: show ? 'block' : 'none' }}>
        <div className="container" style={{ height: '500px', width: '100%', overflow: 'auto' }}>
          <div className="row">
            {data.map((value, index) => {
              return (
                <button
                  className="btn btn-danger col"
                  onClick={() => {
                    dispatch({
                      type: 'choseQuestion',
                      payload: index,
                    });
                    setShow(false);
                    //   dispatch({ type: 'newAnswerChoseQuestion', payload: index });
                  }}
                >
                  Câu {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
