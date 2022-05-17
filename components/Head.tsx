import Head from 'next/head'

export default function WebsiteHeaders() {
  return (
    <Head>
      <title>Formik + Yup React Snippets</title>
      <meta
        name="description"
        content="website which contains various react snippets on Formik"
      />
      <meta
        name="keywords"
        content="react, formik, yup, snippets, react snippets, forms"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  )
}
