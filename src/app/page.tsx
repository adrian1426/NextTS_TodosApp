'use client';

import type { NextPage } from 'next'
import styles from './page.module.css';
import PageWithAuth from '@/HOC/withAuth';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
    </main>
  )
}

export default PageWithAuth(Home);
