import { Title, Input, TextInput } from '@mantine/core';
import styles from '../styles/ruido.module.css';
import { Charts } from '../components/Charts';

export default function ruido() {
  return (
    <>
      <Title order={2}>Ruido en Manta</Title>
      <div className={styles['input-text']}>
        {/* <Input placeholder="Fecha" size="md" />
        <Input placeholder="Lugar" size="md" /> */}
        <TextInput
          className={styles['text-item']}
          label="Fecha"
          placeholder="Fecha"
          description="Ingrese fecha para filtrar"
          // type="date"
        />
        <TextInput
          className={styles['text-item']}
          label="Lugar"
          placeholder="Lugar"
          description="Ingrese ubicación para filtrar"
        />
      </div>
      <div>
        <Charts />
      </div>
    </>
  );
}
