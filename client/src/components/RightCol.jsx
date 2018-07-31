import React from 'react';
import ColumnElement from './ColumnElement.jsx';
const RightCol = props => (
  <div id="rightcol">

    <div>
      <ColumnElement id={'address'} name={props.addr} contents={''} />
    </div>
    <div>
      <ColumnElement
        id={'neighborhood'}
        name={'Neighborhood'}
        contents={props.neighborhood}
      />
    </div>
    <div>
      <ColumnElement
        id={'crossStreet'}
        name={'Cross street'}
        contents={props.cross_street}
      />
    </div>
    <div>
      <ColumnElement
        id={'parking'}
        name={'Parking details'}
        contents={props.parking}
      />
    </div>
    <div>
      <ColumnElement
        id={'publicTransport'}
        name={'Public transit'}
        contents={props.public_transport}
      />
    </div>
    <div>
      <ColumnElement
        id={'additional'}
        name={'Additional'}
        contents={props.additional.join (', ')}
      />
    </div>
  </div>
);

export default RightCol;
