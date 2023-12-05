'use client';

import type { NextPage } from 'next'
import withAuth from '@/HOC/withAuth';
import styles from './page.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
    </main>
  )
}

export default withAuth(Home);
