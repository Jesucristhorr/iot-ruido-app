import styles from '../styles/administrarSensores.module.css';
import { useState } from 'react';
import { Table, Title, Button, TextInput, Modal } from '@mantine/core';

import sensores from '~/data/sensores';
import { Pencil, TrashX } from 'tabler-icons-react';

export const ManageSensors = () => {
  const [opened, setOpened] = useState(false);

  const handleModal = () => {
    setOpened(true);
  };
  return (
    <>
      <Title order={2} style={{ color: '#17a9bf', textAlign: 'center' }}>
        ADMINISTRACIÓN DE SENSORES
      </Title>
      <Button color="cyan" size="md" onClick={handleModal}>
        Agregar sensor
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="70%"
        title="Ingresar Nuevo Sensor"
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
      </Modal>

      <div className={styles['table-container']}>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sensor</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Unidad de medida</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sensores.map((sensor) => {
              return (
                <tr key={sensor.id}>
                  <td>{sensor.id}</td>
                  <td>{sensor.sensor}</td>
                  <td>{sensor.nombre}</td>
                  <td>{sensor.descripcion}</td>
                  <td>{sensor.und}</td>
                  <td>{sensor.latitud}</td>
                  <td>{sensor.longitud}</td>
                  <td className={styles['actions-icons']}>
                    <a href="">
                      <Pencil size={20} strokeWidth={2} color={'#fdcb6e'} />
                    </a>
                    <a href="">
                      <TrashX size={20} strokeWidth={2} color={'#d63031'} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
