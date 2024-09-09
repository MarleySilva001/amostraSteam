import React from "react";
import style from "./styles/Modal.module.css";
import Modal from 'react-modal';

function modalConfig() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={abrirModal}>Excluir conta</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
      >
        <h2>Olá</h2>
        <button onClick={fecharModal}>Fechar</button>
        <div>Confirmar exclusão</div>
      </Modal>
    </div>
  );
}

export default modalConfig;