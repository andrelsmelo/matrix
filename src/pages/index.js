import Head from 'next/head'
import localFont from 'next/font/local'
import Matrix from '@/components/Matrix';
const myFont = localFont({ src: '../../fonts/matrix.ttf' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Matrix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${myFont.className}`}>
        <Matrix /> 
      </main>
    </>
  )
}
