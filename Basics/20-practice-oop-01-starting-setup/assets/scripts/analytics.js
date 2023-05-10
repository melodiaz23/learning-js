// console.log('Sending analytics...')

const intervalId = setInterval(() => {
  console.log('Sending analytics data...');
}, 2000);


document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  // clearTimeout(intervalId); // This will also works.  
  clearInterval(intervalId);  
} )