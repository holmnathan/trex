import React, { useState } from 'react';
import { AddTripForm } from '../trip';
import Button from 'react-bootstrap/Button';
import { CalendarPlus, House } from 'react-bootstrap-icons';

const Home = () => {
  const [addTripModal, setAddTripModal] = useState(false);

  const toggleAddTripModal = () => {
    setAddTripModal(!addTripModal); // Toggle the visibility of Modal
  };

  return (
    <>
      <h1>
        <i className="bi">
          <House />
        </i>
        Dashboard
      </h1>
      <Button size="lg" variant="primary" onClick={toggleAddTripModal}>
        <i className="bi">
          <CalendarPlus className="bi" />
        </i>
        Add Trip
      </Button>
      {addTripModal ? (
        <AddTripForm
          toggleAddTripModal={toggleAddTripModal}
          addTripModal={addTripModal}
        />
      ) : null}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};

export default Home;
