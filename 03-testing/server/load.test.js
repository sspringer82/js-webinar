import { load } from './load';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer();

const serverUsers = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
  },
];

describe('load', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should fetch the data from the server', async () => {
    server.use(
      rest.get('http://localhost:8080/users', (request, response, context) => {
        return response(context.status(200), context.json(serverUsers));
      })
    );
    const users = await load();
    expect(users).toHaveLength(2);
    expect(users[0].firstname).toBe('John');
  });

  it('should fail because of a 500 error', async () => {
    server.use(
      rest.get('http://localhost:8080/users', (request, response, context) => {
        return response(context.status(500));
      })
    );
    const users = load();
    return expect(users).rejects.toStrictEqual(new Error('whoops'));
  });
});
