import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export async function getServerSideProps() {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
  const user = await userResponse.json()
  return { props: { user } }
}

const Home = ({ user }) => {
  return (
    <>
      <Head>
        <title>Rockstar Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className={styles.center}>
          <input placeholder="Search your rockstar DEV..." className={styles.input} />
          <div className={styles.list}>
            <h1>{user.name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;