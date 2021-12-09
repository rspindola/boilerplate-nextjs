import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.socials} data-cy={'header-socials'}>
      <a
        href={'https://github.com/rspindola'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.GITHUB} alt={'GitHub'} />
      </a>
      <a href={'#'} rel="noreferrer noopener">
        <Icon icon={Icons.MEDIUM} alt={'Medium'} />
      </a>
      <a href={'#'} rel="noreferrer noopener">
        <Icon icon={Icons.TWITTER} alt={'Twitter'} />
      </a>
    </span>
  </header>
);

export default Header;
