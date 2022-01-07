import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
