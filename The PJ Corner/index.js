// Using async await

// async function getJoke(){
//     try{
//         const res = await fetch('https://icanhazdadjoke.com/', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//             }
//         })
//         const data = await res.json();
//         const joke = data.joke;
//         changeJoke(joke);
//     }
//     catch(err){
//         console.log('Something is not right', err);
//     }
// }

//Using Axios

const addNewJoke = async () =>{
    const joke = await getDadJoke();
    changeJoke(joke)
}

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    }

    catch(err){
        return("Something went wrong.")
    }
}

function changeJoke(joke){
    document.querySelector("p").innerHTML = joke;
}

document.querySelector("button").addEventListener("click", addNewJoke);
addNewJoke();