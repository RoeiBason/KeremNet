import './App.css';
import { Box } from '@mui/material';
import Post from './Features/Post/Post';

function App() {
  return (
    <Box className="app-container">
      <Post content='this is my first post' ownerName='roei' comments={[{author: 'roei', content:'amazing'}, {author: 'bar', content:'wow!'}, {author: 'maor', content:'beautiful'}]} amountOfLikes={5}></Post>
    </Box>
  );
}

export default App;
