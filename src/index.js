
// require('normalize.css/normalize.css');
require('./styles/index.scss');

import app from './javascript/main.js';
import work from './javascript/work.js';

app.init({
  navEl: '.main-nav',
  scrollThreshold: 200,
});
