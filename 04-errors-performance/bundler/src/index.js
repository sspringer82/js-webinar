import User from './user';
import { toUpperCase } from './util';

const klaus = new User('Klaus', 'müller');

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.innerText = toUpperCase(klaus.fullname);
  body.appendChild(div);
});
