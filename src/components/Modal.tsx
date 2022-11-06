import { Modal as MantineModal } from '@mantine/core';

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  console.log(openModal);

  return (
    <>
      <MantineModal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
        hola es el puto modal
      </MantineModal>
    </>
  );
};
