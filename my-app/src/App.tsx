import './App.css';
import { Box, Typography } from '@mui/material';
import HomePage from './Features/HomePage/HomePage';
import NavBar from './Features/ApplicationLayout/NavBar';

function App() {
  return (
    <Box>
      <NavBar />
      <Box className="app-container">
        <HomePage />
      </Box>
    </Box>
  );
}

export default App;
