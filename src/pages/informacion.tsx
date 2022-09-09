import { Title, Table } from '@mantine/core';
import React from 'react';
import elements from '~/data/elements';
import styles from '../styles/informacion.module.css';

export default function informacion() {
  const rows = elements.map((element) => (
    <tr key={element.nivel}>
      <td>{element.nivel}</td>
      <td>{element.apreciacion}</td>
      <td>{element.ejemplos}</td>
    </tr>
  ));
  return (
    <>
      <Title order={2} style={{ color: '#17a9bf' }}>
        MONITOREO DE RUIDO AMBIENTAL EN MANTA
      </Title>
      <div className={styles['info-text']}>
        <Title order={3}>
          Solución de IoT para la medición de Ruido Ambiental
        </Title>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={styles['table-container']}>
        <div className={styles['table']}>
          <Table striped>
            <thead>
              <tr>
                <th>Nivel de presión sonora, ruido (dB)</th>
                <th>Apreciación</th>
                <th>Ejemplos de fuentes sonoras</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
        <div className={styles['info-text-left']}>
          <Title order={3}>Escala de Ruido recomendado por la OMS</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
