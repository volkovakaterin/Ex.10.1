/* eslint-disable linebreak-style */
import * as gameSavingLoader from '../app';

test('load', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  return gameSavingLoader().then((data) => {
    expect(data).toEqual(expected);
  });
});
// test('load', async () => {
//   const data = await gameSavingLoader();
//   const expected = {
//     id: 9,
//     created: 1546300800,
//     userInfo: {
//       id: 1, name: 'Hitman', level: 10, points: 2000,
//     },
//   };
//   expect(data).toEqual(expected);
// });
