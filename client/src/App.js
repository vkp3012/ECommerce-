import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Products Components</h1>}/>
        <Route path="/add" element={<h1>Add Product Components</h1>}/>
        <Route path="/update" element={<h1>Update Product Components</h1>}/>
        <Route path="/logout" element={<h1>Logout Components</h1>}/>
        <Route path="/profile" element={<h1>Profile Components</h1>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
