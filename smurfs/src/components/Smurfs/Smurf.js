import React from 'react';
import * as MUI from '../../materialui/index';
import './Smurfs.css';
// import { Card, Button, CardTitle, CardText } from 'reactstrap';


const Smurf = props => {
  return (
    <>
      <MUI.Card className='smurf'>
        <MUI.CardContent>
          <MUI.Typography
            variant='body1'
            component='p'
            className='name'
          >
            {props.smurf.name}
          </MUI.Typography>
          <MUI.Typography
            variant='body1'
            component='p'
          >
            Age: {props.smurf.age}
          </MUI.Typography>
          <MUI.Typography
            variant='body1'
            component='p'
          >
            Height: {props.smurf.height}
          </MUI.Typography>
        </MUI.CardContent>
      </MUI.Card>
    </>
  );
};

export default Smurf;