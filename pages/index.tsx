import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export async function getUsersByName(name: string): Promise<User[]> {
  const response = await fetch(`https://api.github.com/search/users?q=${name}`);
  const data = await response.json();
  return data.items;
}

const Home = () => {
  const [list, setList] = useState<User[]>([]);

  async function handleSearch(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    if (value.length > 3) {
      const usersFound = await getUsersByName(value);
      setList(usersFound);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Rockstar Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.center} ${styles.fullHeight}`}>
        <div className={styles.box}>
          <input onKeyUp={handleSearch} placeholder="Search your rockstar DEV..." className={styles.input} />
          <ul className={styles.list}>
            {list?.map(({ id, login, avatar_url }) => (
              <li className={styles.center} key={id}>
                <Link href={`/users/${login}`}>
                  <a>
                    <img src={avatar_url} />
                    <span>{login}</span>
                  </a>              
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;