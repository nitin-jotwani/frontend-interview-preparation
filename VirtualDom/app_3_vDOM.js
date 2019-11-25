// app_3_vDOM.js
import jsxParser from './my-jsx-parser.js';
import { vDOM, renderVDom } from './my-jsx-parser.js';

const App = (props) => {
  const { list } = props;

  return vDOM('div', { class: 'app' },
    vDOM('h1', null, 'Simple vDOM'),
    vDOM(
      'ul', null,
      ...list.map(item => vDOM('li', null, item))
    )
  );
};

let currentApp;
const render = (state) => {
  const newApp = renderVDom(App(state));
  currentApp
  ? document.body.replaceChild(newApp, currentApp)
  : document.body.appendChild(newApp);
  
  currentApp = newApp;
};

const getRandomItemFromArray = (list) => {
  return list[
    Math.round(Math.random() * (list.length - 1))
  ];
};

const state = {
  list: [
    '😀', '😂', '😇', '😋', '😎',
    '😴', '😮', '😘', '🙃', '🙂'
  ]
};

render(state);

// DOM is fully re-rendering every 1 second
setInterval(() => {
  state.list = [
      ...state.list,
      ...getRandomItemFromArray(state.list)
  ];
  render(state);
}, 1000);
