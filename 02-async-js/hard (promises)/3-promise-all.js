/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 1 second');
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 2 seconds');
      }, 2000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 3 seconds');
      }, 3000);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
  
    Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()])
      .then((results) => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log("here are the results ", results);
        results.forEach((result) => {
          console.log(result);
        });
        console.log(`All promises resolved in ${duration} milliseconds.`);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  
  calculateTime();
  