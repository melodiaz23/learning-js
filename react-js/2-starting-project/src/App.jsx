import Post from './components/Post';



// React component
function App() { // We only can reuse multiple components if there are in one single element.
  return <main> 
    {/* main is a root jsx element */}
    <Post author="Maximilian" body="React.js is awesome!" />
    <Post author="Manuel" body="React.js is awesome!" />
    <Post author="Meli" body="React.js is awesome!" />
    <Post author="Ufe" body="React.js is awesome!" />
  </main>
}

export default App;

