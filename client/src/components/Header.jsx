import React from 'react';
import Stars from './Stars.jsx';
const Header = props => (
  <div id="header">
    <h1>{props.name}</h1>
    <Stars num={props.stars} />
    <span id="stars">{props.stars} </span>
    <span>{'       '}</span>
    <svg
      width="24px"
      height="24px"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 490 490"
      style={{background: 'rgb(255, 255, 255)'}}
    >
      <g>
        <g>
          <path d="M393.872,454.517c-2.304,0-4.583-0.804-6.412-2.354l-99.315-84.194H68.115C30.556,367.968,0,337.242,0,299.474V103.977    c0-37.768,30.556-68.494,68.115-68.494h353.77c37.559,0,68.115,30.727,68.115,68.494v195.497    c0,37.768-30.556,68.494-68.115,68.494h-18.071v76.549c0,3.891-2.243,7.428-5.752,9.067    C396.723,454.21,395.293,454.517,393.872,454.517z M68.115,55.483c-26.592,0-48.226,21.754-48.226,48.494v195.497    c0,26.739,21.634,48.494,48.226,48.494h223.662c2.346,0,4.616,0.834,6.411,2.354l85.737,72.685v-65.039c0-5.523,4.453-10,9.945-10    h28.015c26.592,0,48.226-21.755,48.226-48.494V103.977c0-26.74-21.634-48.494-48.226-48.494H68.115z" />
        </g>
        <g>
          <g>
            <path d="M405.168,147.469H84.832c-5.492,0-9.944-4.478-9.944-10c0-5.523,4.452-10,9.944-10h320.335c5.492,0,9.944,4.477,9.944,10     C415.111,142.991,410.66,147.469,405.168,147.469z" />
          </g>
          <g>
            <path d="M405.168,211.503H84.832c-5.492,0-9.944-4.478-9.944-10c0-5.523,4.452-10,9.944-10h320.335c5.492,0,9.944,4.477,9.944,10     C415.111,207.025,410.66,211.503,405.168,211.503z" />
          </g>
          <g>
            <path d="M405.168,275.538H84.832c-5.492,0-9.944-4.478-9.944-10c0-5.523,4.452-10,9.944-10h320.335c5.492,0,9.944,4.476,9.944,10     C415.111,271.06,410.66,275.538,405.168,275.538z" />
          </g>
        </g>
      </g>
    </svg>
    <span id="reviews">{props.reviews}</span>
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      style={{background: 'rgb(255, 255, 255)'}}
    >
      <title>icon/ic_price_range</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="icon/ic_price_range">
          <g id="ic_price_range">
            <rect id="boundry" x="0" y="0" width="24" height="24" />
            <rect
              id="outside"
              stroke="#333333"
              strokeWidth="2"
              x="3"
              y="6"
              width="18"
              height="12"
              rx="2"
            />
            <rect
              id="line"
              fill="#333333"
              x="3"
              y="6"
              width="3"
              height="3"
              rx="0.5"
            />
            <rect
              id="line"
              fill="#333333"
              x="18"
              y="6"
              width="3"
              height="3"
              rx="0.5"
            />
            <rect
              id="line"
              fill="#333333"
              x="3"
              y="15"
              width="3"
              height="3"
              rx="0.5"
            />
            <rect
              id="line"
              fill="#333333"
              x="10"
              y="10"
              width="4"
              height="4"
              rx="2"
            />
            <rect
              id="line"
              fill="#333333"
              x="18"
              y="15"
              width="3"
              height="3"
              rx="0.5"
            />
          </g>
        </g>
      </g>
    </svg>
    <span>{'   '}</span>
    <span id="range">{props.range + '   '}</span>
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      style={{background: 'rgb(255, 255, 255)'}}
    >
      <title>icon/ic_cuisine</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="icon/ic_cuisine">
          <g id="ic_cuisine">
            <rect id="boundary" x="0" y="0" width="24" height="24" />
            <path
              d="M14.55,2 C14.2462434,2 14,2.24624339 14,2.55 L14,21 C14,21.5522847 14.4477153,22 15,22 L16,22 C16.5522847,22 17,21.5522847 17,21 L17,17 L18,17 C19.1045695,17 20,16.1045695 20,15 L20,7.45 C20,4.44004811 17.5599519,2 14.55,2 L14.55,2 Z M18,15 L16,15 L16,4.32 C17.2176535,4.88673047 17.9973291,6.10692278 18,7.45 L18,15 Z"
              id="Shape"
              fill="#333333"
              fillRule="nonzero"
            />
            <path
              d="M11,2 L6,2 C4.8954305,2 4,2.8954305 4,4 L4,11 C4,12.1045695 4.8954305,13 6,13 L7,13 L7,21 C7,21.5522847 7.44771525,22 8,22 L9,22 C9.55228475,22 10,21.5522847 10,21 L10,13 L11,13 C12.1045695,13 13,12.1045695 13,11 L13,4 C13,2.8954305 12.1045695,2 11,2 Z M11,11 L6,11 L6,4 L7,4 L7,8.5 C7,8.77614237 7.22385763,9 7.5,9 C7.77614237,9 8,8.77614237 8,8.5 L8,4 L9,4 L9,8.5 C9,8.77614237 9.22385763,9 9.5,9 C9.77614237,9 10,8.77614237 10,8.5 L10,4 L11,4 L11,11 Z"
              id="Shape"
              fill="#333333"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
    <span>{}</span>
    <span id="cuisine">{props.cuisine}</span>
    <span>{'   '}</span>
    <div id="tags">
      <span className="top"> {props.top[0]}</span>
      <span className="top"> {props.top[1]}</span>
      <span className="top"> {props.top[2]}</span>
    </div>
  </div>
);

export default Header;
