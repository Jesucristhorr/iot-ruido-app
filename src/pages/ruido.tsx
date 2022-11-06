import { Title, TextInput, Button } from '@mantine/core';
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
          // className={styles['text-item']}
          style={{ width: '30%', marginRight: '10px' }}
          label="Fecha"
          placeholder="Fecha"
          description="Ingrese fecha para filtrar"
          // type="date"
        />
        <TextInput
          style={{ width: '30%' }}
          label="Lugar"
          placeholder="Lugar"
          description="Ingrese ubicación para filtrar"
        />
        <Button
          variant="outline"
          color="cyan"
          style={{ marginLeft: '24px' }}
          size="md"
        >
          Filtrar
        </Button>
      </div>
      <div>
        <Charts />
      </div>
    </>
  );
}
