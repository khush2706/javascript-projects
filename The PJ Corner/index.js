async function getJoke(){
    try{
        const res = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        const data = await res.json();
        const joke = data.joke;
        changeJoke(joke);
    }
    catch(err){
        console.log('Something is not right', err);
    }
}

function changeJoke(joke){
    document.querySelector("p").innerHTML = joke;
}

document.querySelector("button").addEventListener("click", getJoke);
getJoke();