import { use, useState } from 'react';
import questions from '../../data/questions.js';
import './QuestionCard.Module.css';

export default function QuestionCard() {

    const [currentQuestionIndex, setCurrentQuestionInddex] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleNextQuestion = () =>{
        if (currentQuestionIndex < questions.length -1){
            setCurrentQuestionInddex(currentQuestionIndex + 1)
        }
    };
    
    const handleResetQuestion = () => {
        setCurrentQuestionInddex(0)
    }

    return(
        <section className='SectionQuestion'>
            <h2>Questão {currentQuestionIndex + 1}</h2>
            <h3>{currentQuestion.question}</h3>
            <ul>
                {currentQuestion.options.map((options, index) => (
                    <div key={`${currentQuestion.id} - ${index}`}>
                        <button onClick={handleNextQuestion}>{options}</button>
                    </div>
                ))}
                <button onClick={handleResetQuestion}>Reiniciar o Quiz</button>
            </ul>

            
        </section>
    )
}
