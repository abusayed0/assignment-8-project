import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent/Parent';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App bg-violet-50">
      <div className="w-10/12 mx-auto">
      <Parent></Parent>
      <Blogs></Blogs>
      </div>
    </div>
  );
}

export default App;
