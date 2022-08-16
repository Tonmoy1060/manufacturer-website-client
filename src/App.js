import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Dashbord from './Pages/Dashbord/Dashbord';
import GetReview from './Pages/Dashbord/Review/GetReview';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import MyOrders from './Pages/Dashbord/MyOrders/MyOrders';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Header/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';
import NotFound from './Pages/Shared/NotFound';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-9'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Blog />} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        } />
        <Route path="/dashbord" element={
          <RequireAuth>
            <Dashbord/>
          </RequireAuth>
        } />
        <Route path="myorders" element={<MyOrders />} />
        <Route path="getreview" element={<GetReview />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
