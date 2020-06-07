import React, { useContext, useState, useEffect } from 'react';
import Tour from 'reactour';
import { PersonContext } from '../../contexts/PersonContext';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import {
  faDownload,
  faPalette,
  faInfoCircle,
  faCheckCircle,
  faListAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

// interface properties
interface iHeaderProps {
  updateTheme: iUpdateTheme;
}

const Header: React.FC<iHeaderProps> = ({ updateTheme }) => {
  const { setCurrPersonId } = useContext(PersonContext)!;
  const [firstTime, setFirstTime] = useState(true);
  const firstTimeDisplay = firstTime ? '' : 'none';

  // toggle the tour
  const [isTourOpen, setIsTourOpen] = useState(false);

  const openTour = () => {
    setIsTourOpen(true);
  };
  const closeTour = () => {
    setIsTourOpen(false);
  };

  // tour config
  const tourConfig = [
    {
      selector: '[data-tut="reactour__item"]',
      content: () => (
        <div>
          <p>
            With reference to your receipt, add the items, prices, tax, and tip.
          </p>
          <p>The subtotal and total will automatically get calculated.</p>
        </div>
      ),
    },
    {
      selector: '[data-tut="reactour__people"]',
      content: () => (
        <p>
          Add names and select the items for each person by clicking on the list
          icon &#40;
          <FontAwesomeIcon icon={faListAlt} />
          &#41;.
        </p>
      ),
    },
    {
      selector: '[data-tut="reactour__item"]',
      content: () => (
        <div>
          <p>
            On the left side of each item, choose the items with a checkmark
            &#40;
            <FontAwesomeIcon icon={faCheckCircle} />
            &#41;.
          </p>
          <p>Then click on the "Done" button at the bottom.</p>
        </div>
      ),
      action: () => {
        window.scrollTo(0, 0);
        setCurrPersonId('1');
      },
    },
    {
      selector: '[data-tut="reactour__difference"]',
      content: () => (
        <div>
          <p>
            Keep selecting items for each person until the difference reaches
            zero.
          </p>
          <p>In the receipt, items left are denoted with a red underline.</p>
        </div>
      ),
      action: () => {
        setCurrPersonId('');
      },
    },
    {
      content: () => (
        <div>
          <p>
            Download this website on to your home screen for easy and offline
            access.
          </p>
          <p>
            Below are links to instructional videos for different mobile
            operating systems.
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
        </div>
      ),
    },
    {
      content: () => (
        <div>
          <p>
            That's it! This app is comepletely free. If you'd like to support my
            journey, please share with your friends and family and/or donate to{' '}
            <a
              href='https://venmo.com/rqreyes'
              target='_blank'
              rel='noopener noreferrer'
            >
              @rqreyes
            </a>{' '}
            on Venmo.
          </p>
          <p>Thank you so much :&#41;</p>
          <Button
            className='primary tour-done'
            type='button'
            onClick={closeTour}
          >
            <span>Done</span>
          </Button>
        </div>
      ),
    },
  ];

  // hide the first time button after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      setFirstTime(false);
    }, 10000);
  }, []);

  return (
    <section className='header'>
      <Button id='installer' className='action' type='button'>
        <FontAwesomeIcon icon={faDownload} />
      </Button>
      <h1>Divvi</h1>
      <div className='button-group'>
        <Button className='action' type='button' onClick={updateTheme}>
          <FontAwesomeIcon icon={faPalette} />
        </Button>
        <Button
          className='action'
          type='button'
          onClick={() => {
            openTour();
            setFirstTime(false);
          }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
        <Tour
          onRequestClose={closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          accentColor={'#007369'}
          highlightedMaskClassName='mask'
        />
      </div>
      <div className={`first-time ${firstTimeDisplay}`}>
        <FontAwesomeIcon icon={faHandPointUp} />
        <Button
          className='primary'
          type='button'
          onClick={() => {
            openTour();
            setFirstTime(false);
          }}
        >
          First Time?
        </Button>
      </div>
    </section>
  );
};

export default Header;
