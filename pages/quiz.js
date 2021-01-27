import React from 'react'
import db from "../db.json"

import BackgroundQuiz from '../src/components/BackgroundQuiz';
import ContainerQuiz from '../src/components/ContainerQuiz';
import LogoQuiz from '../src/components/LogoQuiz';
import CardQuiz from '../src/components/CardQuiz';

export default function quiz() {
    return (
        <BackgroundQuiz backgroundImage={db.bg}>
            <ContainerQuiz>
            <LogoQuiz />
            <CardQuiz>
            <CardQuiz.Header>
                <h1>Pergunta 1</h1>
            </CardQuiz.Header>
            <CardQuiz.Content>
                <p>Lista de Quizes de outros usuários</p>
            </CardQuiz.Content>
            </CardQuiz>
        </ContainerQuiz>
        </BackgroundQuiz>
        
    )
}
