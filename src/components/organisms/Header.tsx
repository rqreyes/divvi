import React, { useContext, useState, useEffect } from 'react';
import Tour from 'reactour';
import { PersonContext } from '../../contexts/PersonContext';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import { faPalette, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

// type properties
interface HeaderProps {
  updateTheme: UpdateThemeType;
}

const Header: React.FC<HeaderProps> = ({ updateTheme }) => {
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
      selector: '[data-tut="reactour__header"]',
      content: () => (
        <div>
          <p>
            Divvi is a bill-splitting application that helps users divvy items
            and calculate the tax, tip, and total cost for each person.
          </p>
          <p>Let's get started.</p>
        </div>
      ),
    },
    {
      selector: '[data-tut="reactour__item"]',
      content: () => (
        <p>
          With reference to your receipt, add all of the items and their prices.
        </p>
      ),
    },
    {
      selector: '[data-tut="reactour__total"]',
      content: () => (
        <div>
          <p>
            Enter the tax and tip - add the tip manually or use one of the
            precentage buttons.
          </p>
          <p>The total will automatically be calculated.</p>
        </div>
      ),
    },
    {
      selector: '[data-tut="reactour__people"]',
      content: () => <p>Add every person's name who is chipping in.</p>,
    },
    {
      selector: '[data-tut="reactour__personSelectItems"]',
      content: () => (
        <p>Activate selecting items for particular individuals.</p>
      ),
    },
    {
      selector: '[data-tut="reactour__personSelectItem"]',
      content: () => (
        <div>
          <p>
            Select the items for the chosen person by toggling the checkmark on
            the left side of each item.
          </p>
        </div>
      ),
      action: () => {
        window.scrollTo(0, 0);
        setCurrPersonId('1');
      },
    },
    {
      selector: '[data-tut="reactour__personSelectItemsDone"]',
      content: () => (
        <div>
          <p>
            Click on the "Done" button at the top of the receipt or the
            checkmark button where the list icon used to be.
          </p>
        </div>
      ),
      action: () => {
        setCurrPersonId('1');
      },
    },
    {
      selector: '[data-tut="reactour__personDropdown"]',
      content: () => (
        <p>
          View each indiviual's receipt - the items they've selected and their
          total breakdown.
        </p>
      ),
      action: () => {
        setCurrPersonId('');
      },
    },
    {
      selector: '[data-tut="reactour__amountLeft"]',
      content: () => (
        <p>
          Keep selecting items for each person until the difference reaches
          zero.
        </p>
      ),
    },
    {
      selector: '[data-tut="reactour__amountDropdown"]',
      content: () => (
        <div>
          <p>
            View the items remaining, which are also denoted with a red
            underline in the receipt section.
          </p>
        </div>
      ),
    },
    {
      selector: '[data-tut="reactour__about"]',
      content: () => (
        <div>
          <p>
            That's it! This app is comepletely free. If you'd like to support my
            journey, please share with your friends and family and/or donate to
            @rqreyes on Venmo.
          </p>
          <p>Thank you so much :&#41;</p>
        </div>
      ),
    },
    {
      selector: '[data-tut="reactour__easterEgg"]',
      content: () => (
        <div>
          <p>Click on the astronaut for an out of this world experience.</p>
          <p>Return back to Earth by tapping on the screen again.</p>
        </div>
      ),
    },
    {
      content: () => (
        <div>
          <p>
            Save this website as a shortcut to your home screen for easy access.
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
      action: () => {
        window.scrollTo(0, 0);
      },
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
      <h1 data-tut='reactour__header'>Divvi</h1>
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
