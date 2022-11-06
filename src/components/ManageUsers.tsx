// import styles from '../styles/users.module.css';
import styles from '../styles/SideBar.module.css';

import { useState } from 'react';
import { Table, Title, Button, Modal } from '@mantine/core';

// import users from '~/data/users';
import { Pencil, TrashX } from 'tabler-icons-react';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikValues,
} from 'formik';
interface Values {
  id: number;
  nombre: string;
  apellido: string;
  login: string;
  rol: string;
  email: string;
  password: string;
}
export const ManageUsers = () => {
  const [opened, setOpened] = useState(false);
  const [alerta, setAlerta] = useState(false);

  const handleModal = () => {
    setOpened(true);
  };

  const [nuevoUsuario, setNuevoUsuario] = useState<Values[]>([
    {
      id: 1,
      nombre: '',
      apellido: '',
      login: '',
      rol: '',
      email: '',
      password: '',
    },
  ]);

  const onValidateForm = (values: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};
    if (
      !values.nombre ||
      !values.apellido ||
      !values.login ||
      !values.rol ||
      !values.email ||
      !values.password
    ) {
      errors.nombre = 'Campo Requerido';
      errors.apellido = 'Campo Requerido';
      errors.login = 'Campo Requerido';
      errors.rol = 'Campo Requerido';
      errors.email = 'Campo Requerido';
      errors.password = 'Campo Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const onFormSubmit = (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>,
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
    console.log(values);
    setNuevoUsuario([...nuevoUsuario, values]);
    resetForm();
    setOpened(false);
    setAlerta(true);
  };

  return (
    <>
      <Title order={2} style={{ color: '#17a9bf', textAlign: 'center' }}>
        ADMINISTRACIÓN DE USUARIOS
      </Title>
      <Button color="cyan" size="md" onClick={handleModal}>
        Nuevo Usuario
      </Button>
      <Formik
        initialValues={{
          id: new Date().getSeconds(),
          nombre: '',
          apellido: '',
          login: '',
          rol: '',
          email: '',
          password: '',
        }}
        onSubmit={onFormSubmit}
        validate={onValidateForm}
      >
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          // size="70%"
          title="Ingresar Nuevo Usuario"
        >
          {/* Modal content */}
          <Form>
            <div className={styles['input-form']}>
              <label htmlFor="sensor">Nombre</label>
              <Field id="sn" name="nombre" placeholder="Nombre" />
              <ErrorMessage
                name="nombre"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="nombre">Apellido </label>
              <Field id="apellido" name="apellido" placeholder="Apellido" />
              <ErrorMessage
                name="apellido"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="descripcion">Usuario</label>
              <Field id="login" name="login" placeholder="Login" />
              <ErrorMessage
                name="descripcion"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-select']}>
              <label htmlFor="descripcion">Rol</label>
              <Field name="rol" component="select">
                <option>Seleccionar</option>
                <option value={1}>Administrador</option>
                <option value={2}>Consulta</option>
                <option value={3}>Estudiante</option>
              </Field>

              <ErrorMessage
                name="rol"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="descripcion">Correo </label>
              <Field
                id="email"
                name="email"
                placeholder=" email"
                type="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="latitud">Contraseña</label>
              <Field
                id="password"
                name="password"
                placeholder="Contraseña"
                type="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <Button color="cyan" style={{ marginTop: '20px' }} type="submit">
              Guardar
            </Button>
          </Form>
        </Modal>
      </Formik>

      <Modal
        withCloseButton={false}
        opened={alerta}
        onClose={() => setAlerta(false)}
      >
        Usuario agregado correctamente!!
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
            {nuevoUsuario.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
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
