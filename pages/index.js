import styled from 'styled-components';
import { useRouter} from "next/router";
import { motion } from "framer-motion";

import db from "../db.json"
import BackgroundQuiz from "../src/components/BackgroundQuiz"
import ContainerQuiz from '../src/components/ContainerQuiz'
import LogoQuiz from '../src/components/LogoQuiz'
import CardQuiz from '../src/components/CardQuiz'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import IndexPage from '../src/components/IndexPage'
import { useState } from 'react';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

export default function Home() {
  const [ name, setName ] = useState('');

  const router = useRouter();

  function  handleSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`)
  }

  function handleChange(event) {
   setName(event.target.value);
  }

  return (
    <BackgroundQuiz backgroundImage={db.bg}>
      <IndexPage />
      <ContainerQuiz>
        <CardQuiz 
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0"},
            hidden: { opacity: 0, y: "100%"},
          }}
          initial="hidden"
          animate="show"
        >
          <CardQuiz.Header>
            <h1>#JavaQuiz</h1>
          </CardQuiz.Header>
          <CardQuiz.Content>
            <p>Hora de testar tudo que você sabe sobre Java.</p>
            <form onSubmit={handleSubmit}>
              <Input placeholder="Preencha seu nome..." onChange={handleChange} />
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name} 
              </Button>
            </form>
          </CardQuiz.Content>
        </CardQuiz>
        <CardQuiz
          as={motion.section}
          transition={{ delay: 0.25, duration: 0.5 }}
          variants={{
            show: { opacity: 1},
            hidden: { opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <CardQuiz.Header>
            <h1>Quizes da Galera</h1>
          </CardQuiz.Header>
          <CardQuiz.Content>
            <ul>
            {db.external.map((link, index) => {
              const projectGitName = link.replace("https://", "").replace(".vercel.app/", "");
              return (
                <li key={index}>
                  <CardQuiz.Topic as={Link} href={`http://localhost:3000/quiz/${projectGitName}`}>{projectGitName}</CardQuiz.Topic>
                  </li>
              )
            })}
            </ul>
          </CardQuiz.Content>
        </CardQuiz>
        <Footer 
          as={motion.footer}
          transition={{ delay: 0.25, duration: 0.5 }}
          variants={{
            show: { opacity: 1},
            hidden: { opacity: 0},
          }}
          initial="hidden"
          animate="show"
        />
      </ContainerQuiz>
      <GitHubCorner projectUrl="https://github.com/ugocavalcanti/javaquiz-nextjs" />
    </BackgroundQuiz>
  )
}
