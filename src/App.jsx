import { useContext, useEffect } from 'react';
import Welcome from './components/welcome';
import Question from './components/Question';
import { QuizContext } from './context/quiz';
import GameOver from './components/GameOver';
import './App.css';


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(()=> {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
  <div className='App'>
    <h1>Quiz de Programação</h1>
    {quizState.gameStage === "Start" && <Welcome/>}
    {quizState.gameStage === "Playng" && <Question/>}
    {quizState.gameStage === "End" && <GameOver/>}
  </div>
  );
}

export default App;
