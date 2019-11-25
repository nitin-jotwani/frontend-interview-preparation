// app_4_componentBased.js
import jsxParser from './my-jsx-parser.js';
import { vDOM, renderVDom, renderComponent } from './my-jsx-parser.js';
import Component from './component'

const getRandomItemFromArray = (list) => {
  return list[
    Math.round(Math.random() * (list.length - 1))
  ];
};

class App extends Component {
  // render: it actually creates virtual DOM that we use to render real DOM
  render() {
    return vDOM('div', { class: 'app' },
      vDOM('h1', null, 'Simple vDOM'),
      vDOM(People)
    )
  }
};

class People extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        '🕺', '💃', '😀', '🙋‍', '💼',
        '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'
      ]
    }

    this.timer = setInterval(_ => {
      this.setState({
        list: [...this.state.list, getRandomItemFromArray(this.state.list)]
      })
    }, 1000)
  }

  // render: it actually creates virtual DOM that we use to render real DOM
  render(props, state) {
    return vDOM(
      'ul', null,
      ...state.list.map(item => vDOM('li', null, item))
    )
  }
}

renderComponent(new App(), document.querySelector('#root'))