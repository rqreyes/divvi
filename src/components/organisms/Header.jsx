import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette,
  faInfoCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

// bind modal to element for accessibility
Modal.setAppElement('#root');

const Header = ({ updateTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className='header'>
      <h1>Divvi</h1>
      <div className='button-group'>
        <Button className='action' onClick={updateTheme}>
          <FontAwesomeIcon icon={faPalette} />
        </Button>
        <Button className='action' onClick={openModal}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        className='modal'
        overlayClassName='overlay'
        onRequestClose={closeModal}
        closeTimeoutMS={600}
        contentLabel='how to use divvi'
      >
        <Button className='action' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
        <div className='modal-content'>
          <h2>How to Use</h2>
          <h3>Receipt</h3>
          <p>
            Enter items, prices, tax, and tip - subtotal and total will
            automatically get calculated
          </p>
          <h3>People</h3>
          <p>Add people and select the items that belong to each person</p>
          <h3>Amount Left</h3>
          <p>
            If there's a difference, check the items that haven't been selected
            yet (denoted with a red underline)
          </p>
          <h3>That's It!</h3>
          <p>Thanks for using this app :)</p>
        </div>
      </Modal>
    </section>
  );
};

export default Header;
