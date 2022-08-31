import { Navbar, Avatar } from '@mantine/core';
import React from 'react';
import styles from '../styles/SideBar.module.css';
import {
  InfoCircle,
  Speakerphone,
  Artboard,
  Settings,
  User,
} from 'tabler-icons-react';

interface SideBarProps {
  opened: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ opened }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      width={{ sm: 200, lg: 250 }}
      hidden={!opened}
      classNames={{ root: styles.prueba }}
    >
      {/* Esta logueado*/}
      <div className={styles['user-container']}>
        <div className={styles['user-item']}>
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
        <div className={styles['user-login']}>
          <p>e1313817817@live.uleam.edu.ec</p>
          <a href="#">Cerrar Sesión</a>
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
          <Speakerphone size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Niveles de Ruido</a>
          </p>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <Artboard size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Agregar Sensor</a>
          </p>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <Settings size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Administrar Sensores</a>
          </p>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <User size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <p>
            <a href="#">Administrar Usuarios</a>
          </p>
        </div>
      </div>
    </Navbar>
  );
};
