const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data){
  const promise = new Promise ((resolve, reject) =>{
    const xhr = new XMLHttpRequest(); // Allow us to send HTTP request.
    xhr.responseType = 'json';
    xhr.open(method, url); // Configure the request
    xhr.onload = function(){
      resolve(xhr.response)
    };
    xhr.send(JSON.stringify(data)); // JS to JSON data.
    })
  return promise;
}

async function fetchPosts (){
  const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
  // const listOfPost = JSON.parse(xhr.response); // Manual
  const listOfPost = responseData;
  for (const post of listOfPost){
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

async function createPost(tittle, content){
  const userId = Math.random();
  const post = {
    title: tittle, 
    body: content, 
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchPosts();
createPost('DUMMY', 'A dummy post!')




