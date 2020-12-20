import './styles.css';

import debounce from 'lodash.debounce';
import refs from './js/refs';
import { onInputHandler } from './js/handlers';

refs.input.addEventListener('input', debounce(onInputHandler, 500));
