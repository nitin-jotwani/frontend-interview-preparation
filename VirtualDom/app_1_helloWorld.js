// app_1_helloWorld.js
import jsxParser from './my-jsx-parser.js';

const App = () => {
  return jsxParser(
    'h1',
    null,
    'Hello, vDOM!'
  );
};

console.log('App', App());