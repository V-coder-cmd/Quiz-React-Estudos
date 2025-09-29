import React from 'react';
import './ScoreBoard.Module.css';

const ScoreBoard = ({ answers, times, questions, totalPoints, correctAnswersCount, totalQuestions }) => {
  return (
    <div className="ScoreBoard">
      <h2>Resultados</h2>
      <h3>Pontuação Total: {totalPoints}</h3>
      <h4>Acertos: {correctAnswersCount} / {totalQuestions}</h4>

      <div>
        <h3>Resumo de Respostas:</h3>
        <ul>
          {questions.map((question, index) => {
            const isCorrect = answers[index] === question.answer;
            return (
              <li key={question.id} style={{ color: isCorrect ? 'green' : 'red' }}>
                <strong>{question.question}</strong>
                <p>Resposta escolhida: {answers[index]}</p>
                <p>Resposta correta: {question.answer}</p>
                <p>Pontuação: {question.points}</p>
                <p>Tempo gasto: {times[index]} segundos</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ScoreBoard;
