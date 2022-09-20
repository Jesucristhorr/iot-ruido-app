import { Button, Table, Title } from '@mantine/core';
import { Pencil, TrashX } from 'tabler-icons-react';
import sensores from '~/data/sensores';
import styles from '../styles/administrarSensores.module.css';

export default function administrarsensor() {
  const rows = sensores.map((sensor) => (
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
          <Pencil size={20} strokeWidth={2} color={'#17a9bf'} />
        </a>
        <a href="">
          <TrashX size={20} strokeWidth={2} color={'#17a9bf'} />
        </a>
      </td>
    </tr>
  ));
  return (
    <>
      <Title order={2} style={{ color: '#17a9bf', textAlign: 'center' }}>
        ADMINISTRACIÓN DE SENSORES
      </Title>
      <Button color="cyan" size="md">
        Agregar sensor
      </Button>
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
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </>
  );
}
