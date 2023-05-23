const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data){
  // const promise = new Promise ((resolve, reject) =>{
  //   const xhr = new XMLHttpRequest(); // Allow us to send HTTP request.
  // xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.responseType = 'json'; 
  //   xhr.open(method, url); // Configure the request

  //   xhr.onload = function(){
  //     console.dir(xhr);
  //     console.log(xhr);
  //     if(xhr.status >= 200 && xhr.status < 300){ // Indicates a success case
  //       resolve(xhr.response)
  //     } else {
  //       reject(new Error('something went wrong!'));
  //     }
  //   };
  // //  On error listener. In case of network error for example.
  //   xhr.onerror = function(){
  //   reject(new Error('Failed to send the request!')) // If we failed to send the request.
  // }

  //   xhr.send(JSON.stringify(data)); // JS to JSON data.
// })
// return promise;
return fetch(url, {
  method: method, // this pass the GET request
  // body: JSON.stringify(data),
  body: data,

  // headers: {
  //   'Content-Type': 'application/json' // Tell the server the request has json data.
  // }
}).then(response => {
  if(response.status >= 200 && response.status < 300){ // to find out is there is an error
    return response.json(); // JSON to JS object
} else {
  return response.json().then(errData => {
    // console.log(errData)
    throw new Error('Something went wrong - server - side');
  }); 
}
}).catch(error =>{
  console.log(error);
  throw new Error('Something went wrong!')
}); 
}

async function fetchPosts (){
  try {
    const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // const listOfPost = JSON.parse(xhr.response); // Manual
    const listOfPost = responseData.data;
    for (const post of listOfPost){
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
}

async function createPost(tittle, content){
  const userId = Math.random();
  const post = {
    title: tittle, 
    body: content, 
    userId: userId
  };

  const fd = new FormData(form);
  // fd.append('tittle', tittle);
  // fd.append('body', content);
  fd.append('userId', userId);

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event =>{
  if(event.target.tagName === 'BUTTON'){
    const postId = event.target.closest('li').id;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});

