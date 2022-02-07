import { useState } from "react";
import "./App.css";
import CountdownComponent from "./components/CountdownComponent";

const App = () => {
  const [numberQuestion, setNumberQuestion] = useState(1);

  const onDone = () => {
    setNumberQuestion(numberQuestion + 1);
  };

  return (
    <div className="App">
      <CountdownComponent onDone={onDone} nb={numberQuestion} />
    </div>
  );
};

export default App;
