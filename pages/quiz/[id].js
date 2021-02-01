import React from 'react';
import QuizPage from '../../src/screens/Quiz';
import { ThemeProvider } from 'styled-components';

export default function QuizDaGaleraPage({dbExterno}) {
  return (
    <div>
       <ThemeProvider theme={dbExterno.theme}>
        <QuizPage 
          externalQuestions={dbExterno.questions}
          externalBg={dbExterno.bg}
          />
       </ThemeProvider>
    </div>
  );
}

export async function getServerSideProps(context) {
  const domainUrl = context.query.id;

  try {
    const dbExterno = await fetch(`https://${domainUrl}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    return {
      props: {
        dbExterno,
      },
    };
  } catch(err){
    throw new Error(err);
  }
}