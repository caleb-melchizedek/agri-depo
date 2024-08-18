import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  LandingPage from './pages/landing'
import  AdminLogin from './pages/adminLogin'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<AdminLogin />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
