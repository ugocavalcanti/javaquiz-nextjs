import React, { useState } from 'react';
import CardQuiz from '../CardQuiz';
import Button from '../Button';
import AlternativesForm from '../AlternativeForm';

export default function QuestionQuiz({question, questionIndex, totalQuestion, onSubmit, addResult}) {

    const [selectedAlternative, setSelectedAlternative] = useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = useState(undefined);

    const isCorrect = selectedAlternative === question.answer;

    const onSubmitQuestion = (event) => {
        event.preventDefault();
        setIsQuestionSubmited(true);
        setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(false);
        }, 3000);
    };

    return (
        <CardQuiz>
            <CardQuiz.Header>
                <h1>Pergunta {questionIndex+1} de {totalQuestion}</h1>
            </CardQuiz.Header>
            <img
                alt="Descrição"
                style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                }}
                src={question.image}
            />
            <CardQuiz.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                <AlternativesForm onSubmit={onSubmitQuestion}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const idAlternativa = `alternativa_${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
                        const selectedCorrect = selectedAlternative === alternativeIndex;
                        return (
                            <CardQuiz.Topic 
                                as="label" 
                                key={alternativeIndex} 
                                data-selected={selectedCorrect}
                                data-status={isQuestionSubmited && alternativeStatus}
                                >
                                <input
                                style={{display: "none"}}
                                id={idAlternativa}
                                type="radio" 
                                name={`question_${questionIndex}`}
                                onChange={() => setSelectedAlternative(alternativeIndex) }
                                />
                                {alternative}
                            </CardQuiz.Topic>
                        )
                    })}
                    <Button type="submit">Confirmar</Button>
                    {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
                    {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
                </AlternativesForm>
            </CardQuiz.Content>
        </CardQuiz>
    )
}
