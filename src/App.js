import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Loginpage/Login';
import Blog from './Components/BlogPage/Blog';
import Cardiology from './Components/CardiologyPage/Cardiology';
import DrSalem from './Components/AboutDoctorsPage/DrSalem';

function App() {
  const isLoading = "true";
  if (isLoading) {
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  } else {
    <App/>
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/cardiology' element={<Cardiology />}></Route>
          <Route path='/drsalem' element={<DrSalem />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
