import { Footer as MantineFooter } from '@mantine/core';
import styles from '../styles/Footer.module.css';
import { BrandGithub } from 'tabler-icons-react';

export const Footer = () => {
  return (
    <MantineFooter height={90} p="md" className={styles.footer}>
      <div className={styles['footer-container']}>
        <p>
          Desarrollado por{' '}
          <a href="#" className={styles['footer-a']}>
            Jennifer
          </a>{' '}
          y{' '}
          <a href="#" className={styles['footer-a']}>
            Jesús
          </a>
        </p>
        <div>
          <BrandGithub />
        </div>
      </div>
    </MantineFooter>
  );
};
