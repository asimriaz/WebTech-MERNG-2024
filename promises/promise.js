function first() {
    return new Promise((resolve, reject) => resolve(`first call`))
}

function second(callback) {
    return new Promise((resolve, reject) => fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(res => res.json())
        .then(user => resolve(`second call ${user.name}`))

    )
}

function third() {
    return new Promise((resolve, reject) => resolve(`third call`))
}


first()
    .then(data => console.log(data))
    .then(() => second()
        .then(data => console.log(data))
        .then(() => third()
            .then(data => console.log(data))
        ))



