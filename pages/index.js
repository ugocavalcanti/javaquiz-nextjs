import styled from 'styled-components';
import { useRouter} from "next/router";

import db from "../db.json"
import BackgroundQuiz from "../src/components/BackgroundQuiz"
import ContainerQuiz from '../src/components/ContainerQuiz'
import LogoQuiz from '../src/components/LogoQuiz'
import CardQuiz from '../src/components/CardQuiz'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import IndexPage from '../src/components/IndexPage'
import { useState } from 'react';

export default function Home() {
  const [ name, setName ] = useState('');

  const router = useRouter();

  function  handleSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`)
    console.log("Enviando submit");
  }

  function handleChange(event) {
   setName(event.target.value);
  }

  return (
    <BackgroundQuiz backgroundImage={db.bg}>
      <IndexPage />
      <ContainerQuiz>
        <LogoQuiz />
        <CardQuiz>
          <CardQuiz.Header>
            <h1>Teste seu conhecimento</h1>
          </CardQuiz.Header>
          <CardQuiz.Content>
            <p>Hora que testar tudo que você sabe sobre Java.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Preencha seu nome..." name="name" onChange={handleChange} />
              <button type="submit" disabled={name.length === 0}>Jogar {name}</button>
            </form>
          </CardQuiz.Content>
        </CardQuiz>
        <CardQuiz>
          <CardQuiz.Header>
            <h1>Quizes da Galera</h1>
          </CardQuiz.Header>
          <CardQuiz.Content>
            <p>Lista de Quizes de outros usuários</p>
          </CardQuiz.Content>
        </CardQuiz>
        <Footer />
      </ContainerQuiz>
      <GitHubCorner projectUrl="https://github.com/ugocavalcanti/javaquiz-nextjs" />
    </BackgroundQuiz>
  )
}
