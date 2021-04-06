import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

const LogOut = () => {
  const header = <h2>Thanks For Stopping By!</h2>;

  const body = (
    <p>
      Probabo, inquit, modo dixi, constituto, ut earum motus et aperta iudicari
      ea commodi. Omne animal, simul atque natum sit, aspernatur aut odit aut ad
      respondendum reddidisti. Certe, inquam, pertinax non intellegamus, tu tam
      inportuno tamque crudeli; sin, ut ita.
    </p>
  );

  const footer = (
    <Link className="btn btn-primary" to="/">
      Home
    </Link>
  );

  return (
    <Modal header={header} footer={footer}>
      {body}
    </Modal>
  );
};

export default LogOut;
