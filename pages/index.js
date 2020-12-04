import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Song Guessr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="is-size-1 has-text-centered has-text-primary">What song is this?</h1>
    </div>
  )
}
