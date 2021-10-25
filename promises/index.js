console.log("Hello");
console.log("Call evalPromise(bool value here)");

function evalPromise(condition){

const myPromise = new Promise((resolve, reject) => {

  if(condition){
    resolve("Promise is resolved succesfully");
    console.log("Success")
  }
  else{
    reject("Promise is rejected");
    console.log("Failure");
  }
})

myPromise
  .then((message) => {
    console.log(message);
    console.log("You entered a true value");
  })
  .catch((err) => {
    console.log(message);
    console.log("You entered a false value");
  })
}
