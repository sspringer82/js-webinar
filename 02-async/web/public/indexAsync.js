const search = 'ohns';

// (async () => {
// alle user laden
const allUsersResponse = await fetch('http://localhost:8081/api/users');
const allUsersData = await allUsersResponse.json();

// einen user finden
const foundUser = allUsersData.find((user) =>
  user.lastname.toLowerCase().includes(search.toLowerCase())
);

// details laden
const userDetailsRequest = await fetch(
  'http://localhost:8081/api/users/' + foundUser.id
);
const userDetailsData = await userDetailsRequest.json();

// ausgabe
console.log('Results for "ohns"', userDetailsData);
// })();
