import { useEffect, useReducer } from 'react';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
import '../index.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import data from './data.json';
const SECS_PER_QUESTION = 5;

// We need to define the intialState in order to use useReduce Hook.
const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer':
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points: question.options[action.payload] === question.correctOption ? state.points + 1 : state.points,
      };
    case 'newAnswerChoseQuestion':
      // const questionChose = state.questions.at(state.index);
      return {
        ...state,
        points: state.points + action.payload,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'choseQuestion':
      return { ...state, index: action.payload, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return { ...initialState, questions: state.questions, status: 'ready' };

    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        highscore:
          state.secondsRemaining === 0
            ? state.points > state.highscore
              ? state.points
              : state.highscore
            : state.highscore,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Action unkonwn');
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  // useEffect(function () {
  //   fetch("https://vinayak9669.github.io/React_quiz_api/questions.json")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       dispatch({
  //         type: "dataReceived",
  //         payload: data["questions"],
  //       })
  //     )
  //     .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);

  useEffect(() => {
    dispatch({
      type: 'dataReceived',
      payload: data,
    });
  }, []);

  return (
    <div className="wrapper">
      {/* <div className="coppy-right">coppy right to huusangcv</div> */}
      <SpeedInsights />
      <div className="app">
        <div className="headerWrapper">
          <Header />

          <Main>
            {status === 'loading' && <Loader />}
            {status === 'error' && <Error />}
            {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}{' '}
            {status === 'active' && (
              <>
                <Progress
                  index={index}
                  numQuestions={numQuestions}
                  points={points}
                  maxPossiblePoints={maxPossiblePoints}
                  answer={answer}
                />
                <Question question={questions[index]} dispatch={dispatch} answer={answer} />
                <Footer dispatch={dispatch}>
                  <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
                  <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index} />
                </Footer>
              </>
            )}
            {status === 'finished' && (
              <FinishScreen
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                highscore={highscore}
                dispatch={dispatch}
              />
            )}
          </Main>
        </div>
      </div>
    </div>
  );
}
