export async function load() {
  const response = await fetch('http://localhost:8080/users');
  if (!response.ok) {
    throw new Error('whoops');
  }
  const users = await response.json();
  return users;
}
