import { useState, useEffect} from "react";

import Post from "./Post";
// import NewPost from "../routes/NewPost";
// import Modal from "./Modal";
import classes from "./PostList.module.css";

function PostList({ isPosting, onStopPosting }) {
  // let modalContent;

  // if (modalIsVisible){
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={changeBodyHandler}
  //         onAuthorChange={authorChangeHandler}
  //       />
  //     </Modal>
  //   );
  // }
  // fetch('http://localhost:8080/posts').then(response => response.json().then(data => setPosts(data.posts))); Infinitive loop
  console.dir(useState);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fecthPosts(){
    setIsFetching(true);
    const response = await fetch('http://localhost:8080/posts'); 
    const resData = await response.json();
    setPosts(resData.posts);
    setIsFetching(false);
    } 

    fecthPosts();
  }, []); // Takes a function and an array

  function addPostHandler(postData) {
    // To send HTTP request
    fetch('http://localhost:8080/posts', {
      method: 'POST',  // By defult is GET
      body: JSON.stringify(postData), // To convert to JSON 
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {/* {modalContent}
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )} */}
      {!isFetching && posts.length > 0 && (<ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
      </ul>
      )}        {/* renderización condicional */}
        {!isFetching && posts.length === 0 && (
          <div style={{textAlign: 'center', color: 'white'}}>
            <h2>There are no post yet.</h2>
            <p>Start adding some!</p>
          </div>
        )}
      {isFetching &&  (<div style={{textAlign: 'center', color: 'white' }}><p>Loading posts...</p></div>)}
    </>
  );
}

export default PostList;
