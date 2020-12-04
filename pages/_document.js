import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.1/css/bulma.min.css"/>
        </Head>
        <body>
          <div className="section">
            <div className="container">
              <Main />
            </div>
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
