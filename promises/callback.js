function first(callback){
    console.log(`first call`);
    callback();
}

function second(callback){
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(user => console.log(`second call ${user.name}`))
    .then(()=>callback() );
}

function third(){
    console.log(`third call`);
}

first(function(){
    second(function(){
        third();
    })
});

first(()=> second(() => third()));


