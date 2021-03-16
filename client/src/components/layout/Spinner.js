import React, { Fragment } from 'react';
import spinner from '../../img/pac-spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '100px', margin: '150px auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;