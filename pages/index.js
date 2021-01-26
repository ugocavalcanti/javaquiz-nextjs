import styled from 'styled-components'
import db from "../db.json"
import BackgroundQuiz from "../src/components/BackgroundQuiz"
import ContainerQuiz from '../src/components/ContainerQuiz'
import LogoQuiz from '../src/components/LogoQuiz'
import CardQuiz from '../src/components/CardQuiz'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import IndexPage from '../src/components/IndexPage'


export default function Home() {
  return (
    <BackgroundQuiz backgroundImage={db.bg}>
      <IndexPage />
      <ContainerQuiz>
        <LogoQuiz />
        <CardQuiz>
          <CardQuiz.Header>
            <h1>{db.title}</h1>
          </CardQuiz.Header>
          <CardQuiz.Content>
            <p>{db.description}</p>
          </CardQuiz.Content>
        </CardQuiz>
        <CardQuiz>
          <CardQuiz.Header>
            <h1>{db.title}</h1>
          </CardQuiz.Header>
          <CardQuiz.Content>
            <p>{db.description}</p>
          </CardQuiz.Content>
        </CardQuiz>
        <Footer />
      </ContainerQuiz>
      <GitHubCorner projectUrl="https://github.com/ugocavalcanti/javaquiz-nextjs" />
    </BackgroundQuiz>
  )
}
