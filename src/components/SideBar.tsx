import { Navbar, Avatar } from '@mantine/core';
import React from 'react';
import styles from '../styles/SideBar.module.css';
import { InfoCircle } from 'tabler-icons-react';

interface SideBarProps {
  opened: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ opened }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      width={{ sm: 200, lg: 200 }}
      hidden={!opened}
      classNames={{ root: styles.prueba }}
    >
      {/* Navbar content */}
      <div className={styles['user-container']}>
        <Avatar
          component="a"
          href="#"
          target="_blank"
          src=""
          alt="it's me"
          color="cyan"
          radius="xl"
        />
        <div className={styles['user-container-info']}>
          <p>Jennifer Intriago</p>
        </div>
      </div>

      <div className={styles['nav-container']}>
        <div>
          <InfoCircle size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Información</a>
          </p>
        </div>
      </div>

      <div className={styles['nav-container']}>
        <div>
          <InfoCircle size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Niveles de Ruido</a>
          </p>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <InfoCircle size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Login</a>
          </p>
        </div>
      </div>
    </Navbar>
  );
};
