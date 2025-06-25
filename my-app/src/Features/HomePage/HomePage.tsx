import React, { useEffect, useState, FC } from "react";
import PostList from "./PostList";
import { Box } from "@mui/material";


const HomePage: FC = () => {


  const [posts, setPosts] = useState(null)

  useEffect(() => { async function fetchBlogs() {
      let response = await fetch('http://localhost:8000/posts');
      let data = await response.json();
      setPosts(data);
    }

    fetchBlogs();
  }, []);

  return (
    <Box>
      {posts && <PostList posts={posts} />}
    </Box>
  );
};

export default HomePage;