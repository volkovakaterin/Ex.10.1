/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data)).then((result) => JSON.parse(result));
  }
}
