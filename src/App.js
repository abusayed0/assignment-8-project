import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent/Parent';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App bg-violet-50">
      <div className="w-100 md:w-10/12 md:mx-auto px-2 md:px-0">
      <Parent></Parent>
      <Blogs></Blogs>
      </div>
    </div>
  );
}

export default App;
