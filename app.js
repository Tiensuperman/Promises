//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
//const emailRef = document.querySelector(".email");

//1. Then
//fetch("https://jsonplaceholder.typicode.com/users/1")
//.then((response) => {
//return response.json();
//})
//.then((data) => {
//console.log(data);
//emailRef.innerHTML = data.email
//});

//2. Async/Await
//async function main() {
//const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//const data = await response.json()
//console.log(data)
//emailRef.innerHTML = data.email
//}

//main()
//const statusRef = document.querySelector('.status')

//function getSubscriptionStatus() {
//return new Promise((resolve, reject) => {
//setTimeout(() => {
//resolve("VIP")
//}, 2000);
//})
//}

//Then
//getSubscriptionStatus().then(response => console.log(response))

//Async/Await
//async function main() {
//const status = (await getSubscriptionStatus())
//statusRef.innerHTML = status;
//}

//main();

const statusRef = document.querySelector(".status")
const videRef = document.queryCommandIndeterm(".video")

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("undefined");
    }, 2000);
  });
}

function getVideo(SubscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (SubscriptionStatus === "VIP") { 
      resolve("Show Video")
    }
    else if (SubscriptionStatus === "FREE") {
      resolve("Show Trailer")
    }
    else {
      reject("No Video")
    }
  })
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status; 
  try {
    console.log(await getVideo(status))
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
}

main();