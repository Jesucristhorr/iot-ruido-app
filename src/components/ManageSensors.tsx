// import styles from '../styles/administrarSensores.module.css';
import styles from '../styles/SideBar.module.css';

import { useState } from 'react';
import { Table, Title, Button, Modal, Text } from '@mantine/core';

// import sensores from '~/data/sensores';

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
  sn: string;
  nombre: string;
  descripcion: string;
  unidadMedida: string;
  latitud: string;
  longitud: string;
}

// let nuevoSensor: any[];

export const ManageSensors = () => {
  const [opened, setOpened] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [deleteSensor, setDeleteSensor] = useState(false);

  const [nuevoSensor, setNuevoSensor] = useState<Values[]>([
    {
      id: 1,
      sn: '',
      nombre: '',
      descripcion: '',
      unidadMedida: '',
      latitud: '',
      longitud: '',
    },
  ]);

  const onFormSubmit = (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>,
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
    console.log(values);
    setNuevoSensor([...nuevoSensor, values]);
    console.log(nuevoSensor);

    resetForm();
    setOpened(false);
    setAlerta(true);
  };
  const onValidateForm = (values: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};
    if (
      !values.sn ||
      !values.nombre ||
      !values.descripcion ||
      !values.unidadMedida ||
      !values.latitud ||
      !values.longitud
    ) {
      errors.sn = 'Campo Requerido';
      errors.nombre = 'Campo Requerido';
      errors.descripcion = 'Campo Requerido';
      errors.unidadMedida = 'Campo Requerido';
      errors.latitud = 'Campo Requerido';
      errors.longitud = 'Campo Requerido';
    }

    return errors;
  };

  const handleModal = () => {
    setOpened(true);
  };
  const openDeleteModal = () => {
    setDeleteSensor(true);
  };

  const deleteSensorConfirmed = () => {
    //TODO: Borrar registro - quitarlo de la tabla
    console.log('Webada borrada');
    setDeleteSensor(false);
  };

  return (
    <>
      <Title order={2} style={{ color: '#17a9bf', textAlign: 'center' }}>
        ADMINISTRACIÓN DE SENSORES
      </Title>
      <Button color="cyan" size="md" onClick={handleModal}>
        Agregar sensor
      </Button>

      <Formik
        initialValues={{
          id: new Date().getTime(),
          sn: '',
          nombre: '',
          descripcion: '',
          unidadMedida: '',
          latitud: '',
          longitud: '',
        }}
        onSubmit={onFormSubmit}
        validate={onValidateForm}
      >
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Ingresar nuevo Sensor"
          size="70%"
        >
          {/* Modal content */}
          <Form>
            <div className={styles['input-form']}>
              <label htmlFor="sensor">Sensor </label>
              <Field id="sn" name="sn" placeholder="SN" />
              <ErrorMessage
                name="sn"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="nombre">Nombre </label>
              <Field id="nombre" name="nombre" placeholder="Nombre" />
              <ErrorMessage
                name="nombre"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="descripcion">Descripción</label>
              <Field
                id="descripcion"
                name="descripcion"
                placeholder="Descripción"
              />
              <ErrorMessage
                name="descripcion"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="descripcion">Unidad de Medida </label>
              <Field
                id="unidadMedida"
                name="unidadMedida"
                placeholder="Unidad de Medida"
              />
              <ErrorMessage
                name="unidadMedida"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="latitud">Latitud</label>
              <Field id="latitud" name="latitud" placeholder="Latitud" />
              <ErrorMessage
                name="latitud"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <div className={styles['input-form']}>
              <label htmlFor="longitud">longitud</label>
              <Field id="longitud" name="longitud" placeholder="Longitud" />
              <ErrorMessage
                name="longitud"
                component="div"
                className={styles['error-form']}
              />
            </div>

            <Button color="cyan" style={{ marginTop: '20px' }} type="submit">
              Guardar
            </Button>
          </Form>
          {/* Modal content */}
        </Modal>
      </Formik>
      <Modal
        withCloseButton={false}
        opened={alerta}
        onClose={() => setAlerta(false)}
      >
        Sensor agregado correctamente!!
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
            {nuevoSensor.map((sensor) => {
              return (
                <tr key={sensor.id}>
                  <td>{sensor.id}</td>
                  <td>{sensor.sn}</td>
                  <td>{sensor.nombre}</td>
                  <td>{sensor.descripcion}</td>
                  <td>{sensor.unidadMedida}</td>
                  <td>{sensor.latitud}</td>
                  <td>{sensor.longitud}</td>
                  <td className={styles['actions-icons']}>
                    <Button
                      variant="subtle"
                      color="gray"
                      //TODO: cuando es editar
                      onClick={() => {
                        setOpened(true);
                      }}
                    >
                      <Pencil size={20} strokeWidth={2} color={'#fdcb6e'} />
                    </Button>

                    <Button
                      variant="subtle"
                      color="gray"
                      onClick={openDeleteModal}
                    >
                      <TrashX size={20} strokeWidth={2} color={'#d63031'} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal
          // centered
          opened={deleteSensor}
          onClose={() => setDeleteSensor(false)}
          title="Eliminar Sensor"
        >
          <Text>Esta seguro de eliminar el sensor?</Text>
          <Button
            variant="outline"
            color="red"
            sx={{ marginTop: '20px' }}
            onClick={deleteSensorConfirmed}
          >
            Borrar Sensor
          </Button>
        </Modal>
      </div>
    </>
  );
};
