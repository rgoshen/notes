const rewire = require('rewire');
const server = rewire('./server');
const authenticateToken = server.__get__('authenticateToken');
// @ponicode
describe('authenticateToken', () => {
  test('0', () => {
    let object = [
      ['Jean-Philippe', 'Anas', 'Edmond', 'Edmond'],
      ['Jean-Philippe', 'Pierre Edouard', 'George', 'Pierre Edouard'],
      ['Jean-Philippe', 'Edmond', 'Michael', 'George'],
      ['Edmond', 'George', 'George', 'Anas'],
    ];
    let result = authenticateToken(
      { headers: { authorization: { split: () => object } } },
      { sendStatus: () => 200 },
      () => true
    );
    expect(result).toMatchSnapshot();
  });

  test('1', () => {
    let object = [
      ['Edmond', 'Michael', 'Edmond', 'Jean-Philippe'],
      ['Anas', 'Jean-Philippe', 'Michael', 'George'],
      ['George', 'Jean-Philippe', 'Michael', 'Michael'],
      ['Jean-Philippe', 'Anas', 'George', 'Anas'],
    ];
    let result = authenticateToken(
      { headers: { authorization: { split: () => object } } },
      { sendStatus: () => 429 },
      () => true
    );
    expect(result).toMatchSnapshot();
  });

  test('2', () => {
    let object = [
      ['Edmond', 'George', 'Michael', 'Edmond'],
      ['George', 'Anas', 'Pierre Edouard', 'Jean-Philippe'],
      ['George', 'Edmond', 'George', 'George'],
      ['Edmond', 'Edmond', 'Edmond', 'Michael'],
    ];
    let result = authenticateToken(
      { headers: { authorization: { split: () => object } } },
      { sendStatus: () => 404 },
      () => true
    );
    expect(result).toMatchSnapshot();
  });

  test('3', () => {
    let object = [
      ['Jean-Philippe', 'Anas', 'Pierre Edouard', 'Jean-Philippe'],
      ['Edmond', 'George', 'George', 'Michael'],
      ['Michael', 'George', 'Edmond', 'George'],
      ['Edmond', 'Pierre Edouard', 'George', 'Jean-Philippe'],
    ];
    let result = authenticateToken(
      { headers: { authorization: { split: () => object } } },
      { sendStatus: () => 500 },
      () => false
    );
    expect(result).toMatchSnapshot();
  });

  test('4', () => {
    let object = [
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard'],
      ['Pierre Edouard', 'George', 'Pierre Edouard', 'Edmond'],
      ['Edmond', 'Michael', 'Michael', 'Anas'],
      ['Michael', 'Edmond', 'George', 'George'],
    ];
    let result = authenticateToken(
      { headers: { authorization: { split: () => object } } },
      { sendStatus: () => 429 },
      () => true
    );
    expect(result).toMatchSnapshot();
  });

  test('5', () => {
    let result = authenticateToken(
      { headers: { authorization: { split: () => [] } } },
      { sendStatus: () => Infinity },
      () => true
    );
    expect(result).toMatchSnapshot();
  });
});
