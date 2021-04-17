/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable max-len */
import GameSavingLoader from './gameSavingLoader';

(() => {
  GameSavingLoader.load().then((result) => { console.log(result); }).catch((error) => { console.log(error); });
})();
