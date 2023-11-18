
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import Login from './components/Login';
import Signup from './components/Signup';
import ViewAllPost from './components/ViewAllPost';
import ViewMyPost from './components/ViewMyPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/add" element={<AddBlog/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/viewAll" element={<ViewAllPost/>}/>
    <Route path="/viewMy" element={<ViewMyPost/>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
