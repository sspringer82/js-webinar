document.addEventListener('DOMContentLoaded', async () => {
  const allUsersResponse = await fetch('http://localhost:8081/api/users');
  const allUsersData = await allUsersResponse.json();

  allUsersData.forEach((user) => {
    const div = document.createElement('div');
    div.innerText = user.firstname + ' ' + user.lastname;
    div.setAttribute('data-id', user.id);

    const button = document.createElement('button');
    button.innerText = 'delete 🗑️';
    button.onclick = async () => {
      const repsonse = await fetch(
        `http://localhost:8081/api/users/${user.id}`,
        { method: 'DELETE' }
      );
      if (repsonse.ok) {
        // lösch den datensatz im Frontend
        document.querySelector('[data-id="' + user.id + '"]').remove();
      }
    };

    div.appendChild(button);
    document.querySelector('body').appendChild(div);
  });
});
