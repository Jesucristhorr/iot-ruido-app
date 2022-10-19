import { Navbar, Avatar, Alert, Notification } from '@mantine/core';
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

import { Modal, Button } from '@mantine/core';
import {
  Form,
  Formik,
  FormikHelpers,
  Field,
  ErrorMessage,
  FormikErrors,
  FormikValues,
} from 'formik';

interface Values {
  sn: string;
  nombre: string;
  descripcion: string;
  unidadMedida: string;
  latitud: string;
  longitud: string;
}
interface SideBarProps {
  opened: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ opened }) => {
  const [openModal, setOpenModal] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const onFormSubmit = (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>,
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
    console.log(values);

    resetForm();
    setOpenModal(false);
    setAlerta(true);
  };
  const onValidateForm = (values: Values) => {
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
            setOpenModal(true);
            // <Modal openModal={true} setOpenModal={setOpenModal} />;
          }}
        >
          <p>Agregar Sensor</p>
        </div>
        <Formik
          initialValues={{
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
            opened={openModal}
            onClose={() => setOpenModal(false)}
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
        {/* alerta */}
        <Modal
          withCloseButton={false}
          opened={alerta}
          onClose={() => setAlerta(false)}
        >
          Sensor agregado correctamente!!
          {/* <Alert title="Bummer!" color="teal">
            Something terrible happened! You made a mistake and there is no
            going back, your data was lost forever!
          </Alert> */}
        </Modal>

        {/* alerta */}
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
          <Link href="/users">
            <p>Administrar Usuarios</p>
          </Link>
        </div>
      </div>
    </Navbar>
  );
};
