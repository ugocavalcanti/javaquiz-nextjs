import React, { useState, useEffect } from 'react';

import BackgroundQuiz from '../../components/BackgroundQuiz';
import ContainerQuiz from '../../components/ContainerQuiz';
import LogoQuiz from '../../components/LogoQuiz';
import QuestionQuiz from '../../components/QuestionQuiz';
import CardQuiz from '../../components/CardQuiz';

const screenStates = {
    QUIZ: "QUIZ",
    LOADING: "LOADING",
    RESULT: "RESULT"
};

function LoadingCard() {
    return (
       <CardQuiz>
           <CardQuiz.Header>
                Carregando....
           </CardQuiz.Header>
           <CardQuiz.Content>
                Carregando...
           </CardQuiz.Content>
       </CardQuiz>
    )
};

function ResultCard({ results }) {
    return (
       <CardQuiz>
           <CardQuiz.Header>
                RESULTADO
           </CardQuiz.Header>
           <CardQuiz.Content>
                <p>Você acertou 
                    {" "}
                    {results.filter((result) => result).length} 
                    {" "}
                    questões.
                </p>
                <ul>
                    {results.map((result, index) => {
                        return (
                            <li key={index}>{`${index+1} - Resultado: ${result ? "Acertou" : "Errou"}`} </li>
                        )
                    })}
                </ul>
           </CardQuiz.Content>
       </CardQuiz>
    )
}


export default function QuizPage({externalQuestions, externalBg}) {
    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const [results, setResults] = useState([]);
    const [questionIndex, setQuestionIndex] =useState(0);
    
    const totalQuestion = externalQuestions.length;
    const question = externalQuestions[questionIndex]; 

    useEffect(() => {
        setTimeout(() => {
           setScreenState(screenStates.QUIZ);
        }, 500);
    }, []);

    const handleSubmitQuestion = () => {
        const nextQuestion = questionIndex+1;
        
        if (nextQuestion < totalQuestion) {
            setQuestionIndex(nextQuestion);
        }else {
            setScreenState(screenStates.RESULT);
        }
    };

    const addResults = (result) => {
        setResults([
            ...results,
            result
        ])
    };

    return (
        <BackgroundQuiz backgroundImage={externalBg}>
            <ContainerQuiz>
            <LogoQuiz />
            {screenState === screenStates.QUIZ && 
            <QuestionQuiz
                question={question}
                questionIndex={questionIndex}
                totalQuestion={totalQuestion}
                onSubmit={handleSubmitQuestion}
                addResult={addResults}
                 />}
            
            {screenState === screenStates.LOADING && <LoadingCard />}

            {screenState === screenStates.RESULT && <ResultCard results={results} />}
        </ContainerQuiz>
        </BackgroundQuiz>
        
    )
}
