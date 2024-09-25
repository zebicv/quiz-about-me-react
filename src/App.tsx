import { useEffect, useReducer } from "react";
import Question from "./Question";
import MainEl from "./MainEl";
import Progress from "./Progress";
import StartScreen from "./StartScreen";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Button from "./Button";
import Footer from "./Footer";

// Possible statuses: 'loading', 'error', 'ready', 'active', 'finished'

const API = "http://localhost:8000/questions";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "startGame":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "tick": {
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining < 1 ? 0 : state.secondsRemaining - 1,
        status: state.secondsRemaining < 1 ? "finished" : "active",
      };
    }
    case "newAnswer": {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === question["correctOption"]
            ? state.score + question["points"]
            : state.score,
      };
    }
    case "nextQuestion": {
      const numQuestions = state.questions.length;
      if (numQuestions === state.index) {
        return {
          ...state,
          status: "finished",
          answer: null,
          highscore:
            state.score > state.highscore ? state.score : state.highscore,
        };
      } else {
        return {
          ...state,
          index: state.index++,
          answer: null,
        };
      }
    }
    case "restartGame":
      return {
        ...state,
        status: "active",
        index: 0,
        answer: null,
        score: 0,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    questions,
    status,
    index,
    answer,
    score,
    highscore,
    secondsRemaining,
  } = state;

  const maxPossibleScore = questions.reduce(
    (accumulator: number, currentValue: number) =>
      accumulator + currentValue.points,
    0
  );

  const isAnswered = answer !== null ? true : false;

  useEffect(() => {
    async function apiCall() {
      const data = await fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch({ type: "dataReceived", payload: data }));
    }
    apiCall();
  }, []);

  return (
    <MainEl>
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" && (
        <>
          <Progress
            questions={questions}
            index={index}
            score={score}
            maxPossibleScore={maxPossibleScore}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <Footer>
            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
            <Button dispatch={dispatch} isAnswered={isAnswered} />
          </Footer>
        </>
      )}
      {status === "finished" && (
        <FinishScreen
          score={score}
          maxPossibleScore={maxPossibleScore}
          dispatch={dispatch}
          highscore={highscore}
        />
      )}
    </MainEl>
  );
}

export default App;
