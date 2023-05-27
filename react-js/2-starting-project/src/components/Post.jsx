function Post(props){ // Props is always gonna be an object.
  return (<div>
    <p>{props.author}</p>
    <p>{props.body}</p>
  </div>
  );
}

export default Post;