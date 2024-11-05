import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Signup';
import Login from './Login';
import Home from './home'; // Home component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
