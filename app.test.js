const uuid = require('uuid');
const helloWorld = require('./app').helloWorld

describe('GET /', () => {
  let req
  let res
  beforeEach(() => {
    const name = uuid.v4();
    req = {
      body: {
        name: name
      }
    };
    res = { send: jest.fn() }
  })
  test('should match snapshot', async () => {
      helloWorld(req, res)
      expect(res).toMatchSnapshot()
  });
})
