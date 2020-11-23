import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';
// import { Card, Button, CardTitle, CardText } from 'reactstrap';

const SmurfForm = props => {
  const [smurf, setSmurf] = useState({});
  // array with one smurf returned 
  const [url, setUrl] = useState(`http://localhost:3333/smurfs/`);

  const handleChanges = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addSmurf(url, smurf);

    setSmurf({});
  };

  return (
    <>
      <form
        className='smurf-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>
          Name:
                </label>
        <input
          type='text'
          id='name'
          name='name'
          value={smurf.name}
          onChange={handleChanges}
        />
        <label htmlFor='name'>
          Age:
                </label>
        <input
          type='text'
          id='age'
          name='age'
          value={smurf.age}
          onChange={handleChanges}
        />
        <label htmlFor='height'>
          Height:
                </label>
        <input
          type='text'
          id='height'
          name='height'
          value={smurf.height}
          onChange={handleChanges}
        />
        <button>Add Smurf</button>
      </form>
    </>
  );
};

export default connect(null, { addSmurf })(SmurfForm);