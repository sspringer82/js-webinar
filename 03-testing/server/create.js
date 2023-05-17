export async function createUser(user) {
  const response = await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('An error happened');
  }
  const newUser = await response.json();
  return newUser;
}
