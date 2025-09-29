import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ScoreBoard from './components/ScoreBoard';
import questions from './data/questions'; 

const App = () => {

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [times, setTimes] = useState([]);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleQuizCompletion = () => {
    let totalPoints = 0;
    let correctAnswers = 0;


    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        totalPoints += questions[index].points;
        correctAnswers += 1;
      }
    });

    setCurrentPoints(totalPoints);
    setCorrectAnswersCount(correctAnswers);
    setQuizCompleted(true); 
  };

  return (
    <div className="App">
      {quizCompleted ? (
        
        <ScoreBoard
          answers={answers}
          times={times}
          questions={questions}
          totalPoints={currentPoints}
          correctAnswersCount={correctAnswersCount}
          totalQuestions={questions.length}
        />
      ) : (
        
        <QuestionCard
          setQuizCompleted={handleQuizCompletion}
          setAnswers={setAnswers}
          setTimes={setTimes}
          answers={answers}
          times={times}
        />
      )}
    </div>
  );
};

export default App;
