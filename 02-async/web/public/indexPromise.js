const search = 'ohns';

fetch('http://localhost:8081/users')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    const foundUser = data.find((user) =>
      user.lastname.toLowerCase().includes(search.toLowerCase())
    );
    const userDetailsRequest = fetch(
      'http://localhost:8081/users/' + foundUser.id
    );
    return userDetailsRequest;
  })
  .then((request) => request.json())
  .then((data) => {
    console.log('Results for "ohns"', data);
  });
