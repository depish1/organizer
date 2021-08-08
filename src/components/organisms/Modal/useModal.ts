import React, { useState } from 'react';
import Modal from 'components/organisms/Modal/Modal';

interface IUseModalReturn {
  Modal: React.FunctionComponent<ModalProps>;
  modalOption: IModalOptions;
  handleCloseModal: () => void;
  handleOpenModal: (taskId: string) => void;
}

const useModal = (): IUseModalReturn => {
  const [modalOption, setModalOption] = useState<IModalOptions>({ isOpen: false, id: null });
  const handleCloseModal = (): void => {
    setModalOption({ isOpen: false, id: null });
  };
  const handleOpenModal = (taskId: string): void => {
    setModalOption({ isOpen: true, id: taskId });
  };

  return {
    Modal,
    modalOption,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
