/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import GameSavingLoader from './gameSavingLoader';

const gameSavingLoader = new GameSavingLoader();
gameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log('Какая-то ошибка');
});
