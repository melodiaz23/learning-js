import { useState } from 'react';  // React hook.
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost}) {
  // const [ enteredBody, setEnteredBody ] = useState('') // Array destructuring
  // // const stateData = useState('');
  // // stateData[0]; // Current value;
  // // stateData[1]; // State updating function;
  // function changeBodyHandler(event){
  //   setEnteredBody(event.target.value);
  // }
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault(); // Prevent the browser to send an HTTP Request
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    }
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      {/* <p>{enteredBody}</p> */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;