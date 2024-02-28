console.log(`first call`);

fetch(`https://jsonplaceholder.typicode.com/users/1`)
.then(res => res.json())
.then(user => console.log(`second call ${user.name}`))

console.log(`third call`);