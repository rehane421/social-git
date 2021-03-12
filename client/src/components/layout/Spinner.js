import React, { Fragment } from 'react';
import spinner from '../../img/pac-spinner.gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '100px', margin: '150px auto', display: 'block' }}
        ali='Loading...'
      />
    </Fragment>
  );
};
