import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// bind modal to element for accessibility
Modal.setAppElement('#root');

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Fragment>
      <h1>Divvi</h1>
      <Button className={'action'} onClick={openModal}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </Button>
      <Modal
        isOpen={isOpen}
        className={'modal'}
        overlayClassName={'overlay'}
        onRequestClose={closeModal}
        contentLabel='how to use divvi'
      >
        <Button className={'action'} onClick={closeModal}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
        <h2>How to use Divvi</h2>
        <h3>Receipt</h3>
        <p>Enter items, prices, tax, and tip</p>
        <h3>People</h3>
        <p>Add people and select the items that belong to each person</p>
        <h3>Amount Left</h3>
        <p>
          If there's a difference, check the items that haven't been selected
          yet (denoted with a red underline)
        </p>
        <h3>That's It!</h3>
        <p>Thanks for using this app :)</p>
      </Modal>
    </Fragment>
  );
};

export default Header;
