function first(){
    console.log(`first call`);
}

async function second(){
    await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(user => console.log(`second call ${user.name}`))
    
}

function third(){
    console.log(`third call`);
}

(async()=>{
    first()
    await second()
    third()
})();


