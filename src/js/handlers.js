import fetchCountries from './fetchCountries';
import teplateCountry from '../template/teplateCountry.hbs';
import teplateCountries from '../template/teplateCountries.hbs';
import refs from './refs';
const { boxCountries, country } = refs;
import './notifications';
import { alert, notice, info, success, error } from '@pnotify/core';

export function onInputHandler(event) {
  boxCountries.innerHTML = '';
  country.innerHTML = '';

  const searchQuery = event.target.value;
  fetchCountries(searchQuery)
    .then(res => {
      console.log(res);
      if (res.length === 1) {
        country.insertAdjacentHTML('afterbegin', teplateCountry(res[0]));
      } else if (res.length > 1 && res.length < 11) {
        boxCountries.insertAdjacentHTML('afterbegin', teplateCountries(res));
      } else {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      }
    })
    .catch(() => {});
}
