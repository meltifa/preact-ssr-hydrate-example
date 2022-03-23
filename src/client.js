import { hydrate } from 'preact';
import Fox from './components/Fox.jsx';

hydrate(Fox(window.bizData), document.getElementById('container'));
