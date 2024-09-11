import { useEffect, useReducer } from "react";
import Question from "./Question";
import MainEl from "./MainEl";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
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
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
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
        status: "ready",
        index: 0,
        answer: null,
        score: 0,
        highscore: 0,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, score, highscore } = state;

  const maxScore = questions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.points,
    0
  );

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
      {status === "finished" && (
        <FinishScreen score={score} maxScore={maxScore} dispatch={dispatch} />
      )}
      {status === "ready" && (
        <>
          <Progress
            questions={questions}
            index={index}
            score={score}
            maxScore={maxScore}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        </>
      )}
    </MainEl>
  );
}

export default App;
