import '../styles/main.scss';
import Layout from '@/Layouts/Layout';
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}
