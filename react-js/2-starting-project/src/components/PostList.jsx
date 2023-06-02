import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
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
  const posts = useLoaderData(); // gives us the data that is returned by this loader that's assigned to this route

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}{' '}
      {/* renderización condicional */}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
