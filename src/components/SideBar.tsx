import { Navbar, Avatar } from '@mantine/core';
import React from 'react';
import styles from '../styles/SideBar.module.css';
import Link from 'next/link';
import {
  InfoCircle,
  Speakerphone,
  Artboard,
  Settings,
  User,
} from 'tabler-icons-react';
// import { Modal } from './Modal';
import { useState } from 'react';

import { Modal, TextInput, Button } from '@mantine/core';
interface SideBarProps {
  opened: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ opened }) => {
  const [openModal, setOpenModal] = useState(false);
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
          <Link href="/informacion">
            <p>Información</p>
          </Link>
        </div>
      </div>

      <div className={styles['nav-container']}>
        <div>
          <Speakerphone size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <Link href="/ruido">
            <p>Niveles de Ruido</p>
          </Link>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <Artboard size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div
          onClick={() => {
            console.log('Me dieron clic, deberia abrir el modal');
            setOpenModal(true);
            // <Modal openModal={true} setOpenModal={setOpenModal} />;
          }}
        >
          <p>Agregar Sensor</p>
        </div>
        <Modal
          opened={openModal}
          onClose={() => setOpenModal(false)}
          title="Ingresar nuevo Sensor"
          size="70%"
        >
          {/* Modal content */}
          <TextInput
            className={styles['text-item']}
            label="SN"
            placeholder="SN"
          />
          <TextInput
            className={styles['text-item']}
            label="Nombre"
            placeholder="Nombre"
          />
          <TextInput
            className={styles['text-item']}
            label="Descripción"
            placeholder="Descripción"
          />
          <TextInput
            className={styles['text-item']}
            label="Unidad de Medida"
            placeholder="Unidad de Medida"
          />
          <TextInput
            className={styles['text-item']}
            label="Latitud"
            placeholder="Latitud"
          />
          <TextInput
            className={styles['text-item']}
            label="Longitud"
            placeholder="Longitud"
          />
          <Button color="cyan" style={{ marginTop: '20px' }}>
            Guardar
          </Button>
          {/* Modal content */}
        </Modal>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <Settings size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <Link href="/administrarsensor">
            <p>Administrar Sensores</p>
          </Link>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <div>
          <User size={30} strokeWidth={2} color={'#17a9bf'} />
        </div>
        <div>
          <Link href="/">
            <p>Administrar Usuarios</p>
          </Link>
        </div>
      </div>
    </Navbar>
  );
};
