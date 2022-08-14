import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Header/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-9'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Blog />} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
