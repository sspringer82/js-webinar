import Database from './database.js';

export async function createUsername(id) {
  const db = new Database();
  const user = await db.getById(id);
  return user.firstname[0] + user.lastname.toLowerCase();
}
