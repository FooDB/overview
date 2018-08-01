import React from 'react';
import ColumnElement from './ColumnElement.jsx';
const RightCol = props => (
  <div id="rightcol">

    <div>
      <h2 id="addressheader">
        {' '}<svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          style={{background: 'rgb(255, 255, 255)'}}
        >
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="icon/ic_location">
              <g id="ic_location">
                <rect id="boundary" x="0" y="0" width="24" height="24" />
                <path
                  d="M12,9 C12.5522847,9 13,9.44771525 13,10 C13,10.5522847 12.5522847,11 12,11 C11.4477153,11 11,10.5522847 11,10 C11,9.44771525 11.4477153,9 12,9 L12,9 Z M12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 Z"
                  id="Shape"
                  fill="#333333"
                  fillRule="nonzero"
                />
                <path
                  d="M12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.21 17.2,14 12,19.21 C6.8,14 6,11.21 6,10 C6,6.6862915 8.6862915,4 12,4 L12,4 Z M12,2 C7.581722,2 4,5.581722 4,10 C4,12.8133333 6.43333333,16.59 11.3,21.33 L11.3,21.33 C11.6888435,21.7111429 12.3111565,21.7111429 12.7,21.33 C17.5666667,16.59 20,12.8133333 20,10 C20,5.581722 16.418278,2 12,2 Z"
                  id="Shape"
                  fill="#333333"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </g>
        </svg>{props.addr}
      </h2>
      <ColumnElement id={'address'} contents={''} />
    </div>
    <div>
      <h2>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          style={{background: 'rgb(255, 255, 255)'}}
        >
          <title>icon/ic_neighborhood</title><desc>Created with Sketch.</desc>
          <defs /><g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="icon/ic_neighborhood">
              <g id="Group-81">
                <rect
                  id="outside"
                  stroke="#333333"
                  strokeWidth="2"
                  x="4"
                  y="8"
                  width="8"
                  height="11"
                  rx="2"
                />
                <path
                  d="M12,18.9976974 L19,18.9976974 C19.5522847,18.9976974 20,18.5499821 20,17.9976974 L20,7.13007812 C20,6.77881527 19.8157012,6.45330845 19.5144958,6.2725852 L16.5144958,4.4725852 C16.1978134,4.28257577 15.8021866,4.28257577 15.4855042,4.4725852 L12.4855042,6.2725852 C12.1842988,6.45330845 12,6.77881527 12,7.13007812 L12,18.9976974 Z"
                  id="outside"
                  stroke="#333333"
                  strokeWidth="2"
                />
                <rect id="Rectangle-75" x="0" y="0" width="24" height="24" />
                <rect
                  id="line"
                  fill="#333333"
                  x="7"
                  y="11"
                  width="2"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="line"
                  fill="#333333"
                  x="7"
                  y="14"
                  width="2"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="line"
                  fill="#333333"
                  x="15"
                  y="11"
                  width="2"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="line"
                  fill="#333333"
                  x="15"
                  y="14"
                  width="2"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="line"
                  fill="#333333"
                  x="15"
                  y="8"
                  width="2"
                  height="2"
                  rx="0.5"
                />
              </g>
            </g>
          </g>
        </svg>Neighborhood
      </h2>
      <ColumnElement id={'neighborhood'} contents={props.neighborhood} />
    </div>
    <div>
      <h2>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          style={{background: 'rgb(255, 255, 255)'}}
        >
          <title>icon/ic_cross_street</title>
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="icon/ic_cross_street">
              <g id="ic_cross_street">
                <rect id="boundry" x="0" y="0" width="24" height="24" />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="9"
                  y="3"
                  width="2"
                  height="5"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="9"
                  y="16"
                  width="2"
                  height="5"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="14"
                  y="3"
                  width="2"
                  height="3"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="14"
                  y="8"
                  width="2"
                  height="3"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="14"
                  y="13"
                  width="2"
                  height="3"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="14"
                  y="18"
                  width="2"
                  height="3"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-42"
                  fill="#333333"
                  x="19"
                  y="3"
                  width="2"
                  height="18"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-57"
                  fill="#333333"
                  x="3"
                  y="6"
                  width="7"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-57"
                  fill="#333333"
                  x="8"
                  y="11"
                  width="3"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-57"
                  fill="#333333"
                  x="3"
                  y="11"
                  width="3"
                  height="2"
                  rx="0.5"
                />
                <rect
                  id="Rectangle-57"
                  fill="#333333"
                  x="3"
                  y="16"
                  width="7"
                  height="2"
                  rx="0.5"
                />
              </g>
            </g>
          </g>
        </svg>
        Cross street
      </h2>
      <ColumnElement id={'crossStreet'} contents={props.cross_street} />
    </div>
    <div>
      <h2>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          style={{background: 'rgb(255, 255, 255)'}}
        >
          <title>icon/ic_parking_details</title>
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="icon/ic_parking_details">
              <rect id="boundry" x="0" y="0" width="24" height="24" />
              <circle
                id="Oval"
                stroke="#333333"
                strokeWidth="2"
                cx="12"
                cy="12"
                r="8"
              />
              <rect
                id="Rectangle-3"
                fill="#333333"
                x="9"
                y="8"
                width="2"
                height="8"
                rx="1"
              />
              <rect
                id="Rectangle-3"
                fill="#333333"
                x="13"
                y="8"
                width="2"
                height="5"
                rx="1"
              />
              <path
                d="M10,8 L14,8 L14,9.5 L14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L10.5,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 L10,8 Z"
                id="Rectangle-3"
                fill="#333333"
              />
              <path
                d="M10.5,11 L13.5,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 L14,13 L10.5,13 L10.5,13 C10.2238576,13 10,12.7761424 10,12.5 L10,11.5 L10,11.5 C10,11.2238576 10.2238576,11 10.5,11 Z"
                id="Rectangle-3"
                fill="#333333"
              />
            </g>
          </g>
        </svg>
        Parking details
      </h2>
      <ColumnElement id={'parking'} contents={props.parking} />
    </div>
    <div>
      <h2>
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <title>icon/ic_public_transit</title>
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="icon/ic_public_transit">
              <g id="ic_public_transit">
                <rect id="boundry" x="0" y="0" width="24" height="24" />
                <g id="Group-71" transform="translate(4.000000, 2.000000)">
                  <g id="Group-70">
                    <path
                      d="M3,2 C1.8954305,2 1,2.8954305 1,4 L1,16 C1,16.5522847 1.44771525,17 2,17 L14,17 C14.5522847,17 15,16.5522847 15,16 L15,4 C15,2.8954305 14.1045695,2 13,2 L3,2 Z"
                      id="Rectangle-62"
                      stroke="#333333"
                      strokeWidth="2"
                    />
                    <rect
                      id="Rectangle-63"
                      fill="#333333"
                      x="3"
                      y="0"
                      width="10"
                      height="3"
                      rx="1.5"
                    />
                    <rect
                      id="Rectangle-63"
                      fill="#333333"
                      x="1"
                      y="9"
                      width="14"
                      height="2"
                      rx="1"
                    />
                    <rect
                      id="Rectangle-64"
                      fill="#333333"
                      x="3"
                      y="16"
                      width="3"
                      height="4"
                      rx="1"
                    />
                    <rect
                      id="Rectangle-64"
                      fill="#333333"
                      x="3"
                      y="12"
                      width="3"
                      height="3"
                      rx="1.5"
                    />
                    <rect
                      id="Rectangle-64"
                      fill="#333333"
                      x="10"
                      y="16"
                      width="3"
                      height="4"
                      rx="1"
                    />
                    <rect
                      id="Rectangle-64"
                      fill="#333333"
                      x="10"
                      y="12"
                      width="3"
                      height="3"
                      rx="1.5"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        Public transit
      </h2>
      <ColumnElement id={'publicTransport'} contents={props.public_transport} />
    </div>
    <div>
      <h2>
        {' '}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
            <rect width="24" height="24" />
            <g transform="rotate(45 5.374 17.754)">
              <path
                stroke="#333333"
                strokeWidth="2"
                d="M1,4.23686384 L1,16 C1,16.5522847 1.44771525,17 2,17 L10,17 C10.5522847,17 11,16.5522847 11,16 L11,4.31096383 L9.65103691,1.55975554 C9.48305062,1.21714773 9.134734,1 8.75315896,1 L3.23618407,1 C2.85738175,1 2.5110964,1.21403622 2.34171932,1.55286154 L1,4.23686384 Z"
              />
              <rect width="4" height="4" x="4" y="4" fill="#333333" rx="2" />
            </g>
          </g>
        </svg>
        Additional
      </h2>
      <ColumnElement
        id={'additional'}
        contents={props.additional.join (', ')}
      />
    </div>
  </div>
);

export default RightCol;
