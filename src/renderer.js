const App = require('./App').default;

const options = {
  target: document.body,
}
const app = new App(options);

module.exports = app;
