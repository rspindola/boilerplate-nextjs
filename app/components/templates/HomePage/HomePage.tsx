import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.content}>
    <span className={styles.author}>
      Made by{' '}
      <a href={'https://renatospindola.me'} target="_blank" rel="noreferrer">
        renatospindola.me
      </a>
    </span>
  </div>
);

export default HomePage;
