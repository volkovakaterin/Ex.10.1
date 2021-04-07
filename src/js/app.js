/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import GameSavingLoader from './gameSavingLoader';

export default (() => {
  GameSavingLoader.load().then((saving) => JSON.parse(saving), (error) => {
    console.log('Какая-то ошибка');
  });
})();
