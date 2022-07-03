import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import MyAppointment from './Components/Dashboard/MyAppointment';
import MyReview from './Components/Dashboard/MyReview';

//--------------React toast--------------
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path='/dashboard/review' element={<MyReview />}></Route>

        </Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
