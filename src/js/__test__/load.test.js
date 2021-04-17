/* eslint-disable linebreak-style */
import GameSavingLoader from '../gameSavingLoader';

test('load', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  return GameSavingLoader.load().then((data) => {
    expect(data).toEqual(expected);
  });
});
