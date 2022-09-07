import { Title, Table } from '@mantine/core';
import React from 'react';
import styles from '../styles/informacion.module.css';
const elements = [
  {
    nivel: 120,
    apreciacion: 'Excesivamente ruidoso',
    ejemplos: 'Umbral de maletar',
  },
  { nivel: 110, apreciacion: 'Excesivamente ruidoso', ejemplos: 'Aereopuert' },
  {
    nivel: 100,
    apreciacion: 'Excesivamente ruidoso',
    ejemplos: 'Moto, fábrica',
  },
  {
    nivel: 90,
    apreciacion: 'Muy ruidoso',
    ejemplos: 'Camión con motor diésel, cortadora de césped',
  },
  {
    nivel: 80,
    apreciacion: 'Muy ruidoso',
    ejemplos: 'Música a todo volumen, alarma de reloj, secadora de cabello',
  },
  {
    nivel: 70,
    apreciacion: 'Ruidoso',
    ejemplos: 'Tráfico, aspiradora, restaurante',
  },
  {
    nivel: 60,
    apreciacion: 'Poco ruidoso',
    ejemplos: 'Conversación',
  },
  {
    nivel: 50,
    apreciacion: 'Poco ruidoso',
    ejemplos: 'Oficina tranquila, lluvia moderada',
  },
  {
    nivel: 40,
    apreciacion: 'Silencioso',
    ejemplos: 'Refigerador, cantar de aves',
  },
  {
    nivel: 30,
    apreciacion: 'Silencioso',
    ejemplos: 'Biblioteca tranquila, susurros, área rural tranquila',
  },
  {
    nivel: 20,
    apreciacion: 'Muy Silencioso',
    ejemplos: 'Estudio de grabación, crujir de hojas secas',
  },
  {
    nivel: 10,
    apreciacion: 'Muy Silencioso',
    ejemplos: 'Cámara aeronoica, respiración',
  },
];
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
