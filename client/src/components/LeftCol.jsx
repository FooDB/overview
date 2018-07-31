import React from 'react';
import ColumnElement from './ColumnElement.jsx';

const LeftCol = props => {
  const formatHours = function () {
    let str = '';
    for (let key in props.hours) {
      str += key + ' \n';
      str += props.hours[key] + ' \n';
      str += `\n`;
    }

    return str;
  };

  return (
    <div id="leftcol">
      <div id="private">
        <h2> Private dining </h2>
        <a href={props.private_url}>
          {props.private_url}
        </a>
      </div>

      <div>
        <ColumnElement
          id={'style'}
          name={'Dining Style'}
          contents={props.style}
        />
      </div>

      <div>
        <ColumnElement
          id={'cuisines'}
          name={'Cuisines'}
          contents={props.cuisines.join (', ')}
        />
      </div>

      <div>
        <ColumnElement
          id={'hours'}
          name={'Hours of operation'}
          contents={formatHours ()}
        />
      </div>

      <div>
        <ColumnElement
          id={'telephone'}
          name={'Phone number'}
          contents={props.telephone}
        />
      </div>

      <div>
        <ColumnElement
          id={'website'}
          name={'Website'}
          contents={props.website}
        />
      </div>

      <div>
        <ColumnElement
          id={'paymentOptions'}
          name={'Payment options'}
          contents={props.payment_options.join (', ')}
        />
      </div>
      <div>
        <ColumnElement
          id={'dressCode'}
          name={'Dress code'}
          contents={props.dress_code}
        />
      </div>
      <div>
        <ColumnElement
          id={'execChef'}
          name={'Executive chef'}
          contents={props.chef}
        />
      </div>
      <div>
        <ColumnElement
          id={'catering'}
          name={'Catering'}
          contents={props.catering}
        />
      </div>
    </div>
  );
};

export default LeftCol;
