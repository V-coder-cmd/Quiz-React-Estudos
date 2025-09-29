import { useState, useEffect } from 'react';
import questions from '../../data/questions';
import './QuestionCard.Module.css';

export default function QuestionCard({ setQuizCompleted, setAnswers, setTimes, answers, times }) {
  const [currentQuestionIndex, setCurrentQuestionInddex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const handleNextQuestion = () => {
    if (selectedAnswer) {

      setAnswers(prev => [...prev, selectedAnswer]);
      setTimes(prev => [...prev, timeSpent]);


      setSelectedAnswer(null);
      setTimeSpent(0);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionInddex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(); 
      }
    }
  };

  const handleResetQuestion = () => {
    setCurrentQuestionInddex(0);
    setAnswers([]);
    setTimes([]);
    setQuizCompleted(false); 
  };

  return (
    <section className="SectionQuestion">
      <h2>Questão {currentQuestionIndex + 1}</h2>
      <h3>{currentQuestion.question}</h3>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <div key={`${currentQuestion.id}-${index}`}>
            <button
              onClick={() => setSelectedAnswer(option)}
              style={{ backgroundColor: selectedAnswer === option ? 'lightblue' : '' }}
            >
              {option}
            </button>
          </div>
        ))}
        <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
          Avançar
        </button>
        <button onClick={handleResetQuestion}>Reiniciar o Quiz</button>
      </ul>
    </section>
  );
}
