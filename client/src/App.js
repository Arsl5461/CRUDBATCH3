import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbar';
import UserRegister from './components/UserRegister';
import { Routes,Route } from 'react-router-dom';
import Users from "./components/Users"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditUser from "./components/EditUser"
function App() {
  return (
  <>
  <Navbarr/>
  <Routes>
  <Route path="/" element={<UserRegister/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path="/user/:id" element={<EditUser/>}></Route>

  </Routes>
  <ToastContainer/>
  </>
  );
}

export default App;
