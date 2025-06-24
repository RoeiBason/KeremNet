import './App.css';
import { Box } from '@mui/material';
import Post from './Features/Post/Post';

function App() {
  return (
    <Box className="app-container">
      <Post text='this is my first post' ownerName='roei' comments={[{commentAuthor: 'roei', commentText:'amazing'}, {commentAuthor: 'bar', commentText:'wow!'}, {commentAuthor: 'maor', commentText:'beautiful'}]} amountOfLikes={5}></Post>
    </Box>
  );
}

export default App;
