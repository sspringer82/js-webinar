document.addEventListener('DOMContentLoaded', async () => {
  const allUsersResponse = await fetch('http://localhost:8081/api/users');
  const allUsersData = await allUsersResponse.json();

  allUsersData.forEach((user) => {
    const div = document.createElement('div');
    div.innerText = user.firstname + ' ' + user.lastname;

    const button = document.createElement('button');
    button.innerText = 'click me';
    button.onclick = () => {
      console.log('you clicked the button');
    };

    div.appendChild(button);
    document.querySelector('body').appendChild(div);
  });
});
