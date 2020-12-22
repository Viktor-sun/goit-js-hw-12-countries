import './styles.css';
import './scss/search-button.scss';

import debounce from 'lodash.debounce';
import refs from './js/refs';
import { onInputHandler } from './js/handlers';
import { onClickHandler } from './js/handlers';

refs.input.addEventListener('input', debounce(onInputHandler, 500));
refs.boxCountries.addEventListener('click', onClickHandler);
