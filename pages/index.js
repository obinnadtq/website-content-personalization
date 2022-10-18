import Head from 'next/head'
import Body from '../src/components/Body'


export default function Home({ fields, composition }) {
  return (
    <div className="container">
      <Head>
        <title>Website content personalization</title>
        <meta name="description" content="Website content personalization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Body/>
      </main>
    </div>
  )
}
