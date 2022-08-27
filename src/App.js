import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
