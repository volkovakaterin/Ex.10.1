/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load() {
    const data = read();
    data.then((data) => json(data));
  }
}
