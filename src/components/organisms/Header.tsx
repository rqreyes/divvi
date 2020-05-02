import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import {
  faPalette,
  faInfoCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

// bind modal to element for accessibility
Modal.setAppElement('#root');

// type properties
interface HeaderProps {
  updateTheme: UpdateThemeType;
}

const Header: React.FC<HeaderProps> = ({ updateTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className='header'>
      <h1>Divvi</h1>
      <div className='button-group'>
        <Button className='action' type='button' onClick={updateTheme}>
          <FontAwesomeIcon icon={faPalette} />
        </Button>
        <Button className='action' type='button' onClick={openModal}>
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
        <Button className='action' type='button' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
        <div className='modal-content'>
          <h2>How to Use</h2>
          <h3>Receipt</h3>
          <p className='step'>
            <span>1.</span>
            <span>Enter items, prices, tax, and tip.</span>
          </p>
          <p className='step tip'>
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Subtotal and total will automatically get calculated.</span>
          </p>
          <h3>People</h3>
          <p className='step'>
            <span>2.</span>
            <span>
              Add names and select the items that belong to each person.
            </span>
          </p>
          <p className='step tip'>
            <FontAwesomeIcon icon={faLightbulb} />
            <span>
              Individual receipts can be viewed via the dropdown icon.
            </span>
          </p>
          <h3>Amount Left</h3>
          <p className='step'>
            <span>3.</span>
            <span>
              Keep selecting items for each person until the difference reaches
              zero.
            </span>
          </p>
          <p className='step tip'>
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Items left can be viewed via the dropdown icon.</span>
          </p>
          <p className='step tip'>
            <FontAwesomeIcon icon={faLightbulb} />
            <span>
              In the receipt, items left are also denoted with a red underline.
            </span>
          </p>
          <h3>Download</h3>
          <p className='step'>
            <span>4.</span>
            <span>
              Save this website as a shortcut to your home screen for easy
              access.
            </span>
          </p>
          <p className='step tip'>
            <FontAwesomeIcon icon={faLightbulb} />
            <span>
              Below are links to instructional videos for different mobile
              operating systems.
            </span>
          </p>
          <div className='button-group'>
            <Button
              className='primary'
              type='button'
              onClick={() => {
                window.open('https://youtu.be/ZqlLCn7_fWk?t=12', '_blank');
              }}
            >
              <span>iOS</span>
              <FontAwesomeIcon icon={faApple} />
            </Button>
            <Button
              className='primary'
              type='button'
              onClick={() => {
                window.open('https://youtu.be/bvVxUH5Ifjk?t=22', '_blank');
              }}
            >
              <span>Android</span>
              <FontAwesomeIcon icon={faAndroid} />
            </Button>
          </div>
          <h3>That's It!</h3>
          <p className='step'>
            <span>5.</span>
            <span>
              This app is comepletely free. If you'd like to support my journey,
              please share with your friends and family and/or donate to
              @rqreyes on Venmo.
            </span>
          </p>
          <p className='step tip'>
            <FontAwesomeIcon icon={faSmileBeam} />
            <span>Thank you so much</span>
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Header;
