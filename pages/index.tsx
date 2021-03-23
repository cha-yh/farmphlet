import Head from 'next/head'
import { useDebugValue, useState } from 'react'
import styles from '../styles/Home.module.css'
function useStateWithLabel(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
}
export default function Home() {
  const [hello, setHello] = useStateWithLabel("world", "hello")
  return (
    <div className={styles.container}>
      <Head>
        <title>Farmphlet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello {hello}
        </h1>
      </main>
    </div>
  )
}
