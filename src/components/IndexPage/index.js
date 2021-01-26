import Head from 'next/head'

function IndexPage() {
  return (
      <Head>
        <title>Java Quiz</title>
        <meta property="og:image" content="https://sempreupdate.com.br/wp-content/uploads/2018/12/como-instalar-o-oracle-java-11-no-ubuntu-linux-mint-ou-debian.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" /> /** PIXELS **/
        <meta property="og:image:height" content="600" /> /** PIXELS **/    
      </Head>
  )
}

export default IndexPage