import { useEffect, useReducer } from "react";
import Question from "./Question";
import MainEl from "./MainEl";

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
        ...initialState,
        questions: action.payload,
        status: "ready",
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index } = state;
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
      {status === "ready" && <Question question={questions[index]} />}
    </MainEl>
  );
}

export default App;
