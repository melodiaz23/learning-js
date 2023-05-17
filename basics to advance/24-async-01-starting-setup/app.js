const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (succes) => {
        resolve(succes);
      },
      (error) => {
        reject(error); // Error object
      },
      options
    );
  });
  return promise
};

const setTimer = async (duration) => {
  const promise = new Promise ((resolve, reject) => {
    setTimeout( () => { // This here is also called promisifying a built in API.
      resolve('Set timer done');
    }, duration);
  });
  return promise;
}

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition() // Return the promise to be resolved.
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  
// The next lines of codes changes with the above structure.
    // .then((posData) => {
    //   // The promise pass back from being resolve to being pending.
    //   positionData = posData;
    //   return setTimer(2000);
    // }) // First argument, the sucess case and second argument the failure case.
    // .catch( // Catch do the same of the second argument.
    //   err => {
    //     console.log(err);
    //     return 'on we go...';
    // })
    // .then((data) => {
    //   console.log(data, positionData); // Promise chaining;
    // });
  // setTimer(1000).then(() => {
  //   console.log('Timer done');
  // })
  // console.log('Getting position');
}

button.addEventListener('click', trackUserHandler);

// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// }) // Promise race execute the fastest promise.

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//   console.log(promiseData);
// }); // Return an array of data;

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
}) // We get an array of objects that describes what the promise did.

// let result = 0; 

// for (let i = 0; i < 100000000; i++){
//   result += i;
// }

// console.log(result);