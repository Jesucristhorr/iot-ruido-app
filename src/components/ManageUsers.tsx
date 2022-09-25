import styles from '../styles/users.module.css';
import { useState } from 'react';
import { Table, Title, Button, TextInput, Modal } from '@mantine/core';

import users from '~/data/users';
import { Pencil, TrashX } from 'tabler-icons-react';

export const ManageUsers = () => {
  const [opened, setOpened] = useState(false);

  const handleModal = () => {
    setOpened(true);
  };
  return (
    <>
      <Title order={2} style={{ color: '#17a9bf', textAlign: 'center' }}>
        ADMINISTRACIÓN DE USUARIOS
      </Title>
      <Button color="cyan" size="md" onClick={handleModal}>
        Nuevo Usuario
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        // size="70%"
        title="Ingresar Nuevo Usuario"
      >
        {/* Modal content */}
        <TextInput
          className={styles['text-item']}
          label="Nombre"
          placeholder="Nombre"
        />
        <TextInput
          className={styles['text-item']}
          label="Apellido"
          placeholder="Apellido"
        />
        <TextInput
          className={styles['text-item']}
          label="Usuario"
          placeholder="Usuario"
        />
        <TextInput
          className={styles['text-item']}
          label="Correo"
          placeholder="Correo"
        />
        <TextInput
          className={styles['text-item']}
          label="Contraseña"
          placeholder="Contraseña"
        />
        <TextInput
          className={styles['text-item']}
          label="Confirmar contraseña"
          placeholder="Confirmar contraseña"
        />
        <Button color="cyan" style={{ marginTop: '20px' }}>
          Guardar
        </Button>
      </Modal>

      <div className={styles['table-container-users']}>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Usuario</th>
              <th>Perfil</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.fullname}</td>
                  <td>{user.login}</td>
                  <td>{user.rol}</td>

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
