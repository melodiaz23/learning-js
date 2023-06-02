import { Outlet } from 'react-router-dom'; //place holder

import PostList from "../components/PostList";
// import MainHeader from "../components/MainHeader";

// React component
function Posts() {
  // We only can reuse multiple components if there are in one single element.
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModalHandler() {
    // setModalIsVisible(true);
  // }

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <Outlet />
      <main>{/* main is a root jsx element */}
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader(){
  const response = await fetch('http://localhost:8080/posts'); 
  const resData = await response.json();
  return resData.posts;
}
