import Header from '../components/Header'
import '../styles/globals.css'
// import React from 'react'
// import App from 'next/app'
// import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header />
  <Component {...pageProps} />

  </>
  )

}

export default MyApp
