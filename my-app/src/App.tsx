import './App.css';
import { Box } from '@mui/material';
import Post from './Features/Post/Post';
import HomePage from './Features/HomePage/HomePage';

function App() {
  return (
    <Box className="app-container">
      <HomePage></HomePage>
      {/* <Post content='this is my first post' ownerName='roei' comments={[{author: 'roei', content:'amazing'}, {author: 'bar', content:'wow!'}, {author: 'maor', content:'beautiful'}]} amountOfLikes={5} date='24.06.2025'></Post> */}
    </Box>
  );
}

export default App;
