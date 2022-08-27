import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
