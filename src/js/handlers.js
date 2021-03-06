import fetchCountries from './fetchCountries';
import teplateCountry from '../template/teplateCountry.hbs';
import teplateCountries from '../template/teplateCountries.hbs';
import refs from './refs';
const { input, boxCountries, country } = refs;
import './notifications';
import { info, success, error } from '@pnotify/core';

export function onInputHandler(event) {
  cleanMarkup();
  const searchQuery = event.target.value;
  if (searchQuery) {
    fetchCountries(searchQuery).then(queriesHandler);
  }
}

export function onClickHandler(event) {
  cleanMarkup();
  const searchQuery = event.target.textContent;
  fetchCountries(searchQuery).then(queriesHandler);
  input.value = '';
}

function cleanMarkup() {
  boxCountries.innerHTML = '';
  country.innerHTML = '';
}

function queriesHandler(res) {
  // console.log(res);
  if (res.length === 1) {
    country.insertAdjacentHTML('afterbegin', teplateCountry(res[0]));
    success({ title: 'Success search!' });
  } else if (res.length > 1 && res.length < 11) {
    boxCountries.insertAdjacentHTML('afterbegin', teplateCountries(res));
    info({
      text: 'Here is what was found.',
    });
  } else if (res.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  } else {
    error({ title: 'Not Found', text: 'Please enter again.' });
  }
}
