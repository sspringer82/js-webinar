import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createUser } from './create';

const server = setupServer();

describe('server', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should write correctly', async () => {
    server.use(
      rest.post('http://localhost:8080/users', (request, response, context) => {
        const newUser = { ...request.body, id: 1 };
        return response(context.status(200), context.json(newUser));
      })
    );

    const user = await createUser({ firstname: 'Klaus', lastname: 'Müller' });

    return expect(user).toEqual({
      id: 1,
      firstname: 'Klaus',
      lastname: 'Müller',
    });
  });

  it('should handle an error', async () => {
    server.use(
      rest.post('http://localhost:8080/users', (request, response, context) => {
        if (request.body.firstname === 'Klaus') {
          return response(context.status(400));
        }
        const newUser = { ...request.body, id: 1 };
        return response(context.status(200), context.json(newUser));
      })
    );

    const user = createUser({ firstname: 'Klaus', lastname: 'Müller' });

    return expect(user).rejects.toEqual(new Error('An error happened'));
  });
});
