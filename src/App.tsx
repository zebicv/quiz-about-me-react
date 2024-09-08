import { useEffect, useReducer } from "react";
import Question from "./Question";
import MainEl from "./MainEl";
import Button from "./Button";

// Possible statuses: 'loading', 'error', 'ready', 'active', 'finished'

const API = "http://localhost:8000/questions";

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
            : 0,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index++,
        answer: null,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, score, highscore } = state;
  console.log(questions);

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
      {status === "ready" && (
        <Question
          question={questions[index]}
          dispatch={dispatch}
          answer={answer}
        />
      )}
    </MainEl>
  );
}

export default App;
