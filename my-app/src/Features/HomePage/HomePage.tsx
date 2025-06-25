import React, { useEffect, useState, FC } from "react";
import PostList from "./PostList";
import { Box } from "@mui/material";
import { PostType } from "./type";


const HomePage: FC = () => {


  const [posts, setPosts] = useState<PostType[]>()

  useEffect(() => {
    async function fetchBlogs() {
      let response = await fetch('http://localhost:8000/posts');
      let data = await response.json();
      setPosts(data);
    }

    fetchBlogs();
  }, []);

  return (
    <Box>{posts && posts.length > 0 ? <PostList posts={posts} /> : <h1>There are no post's available</h1>}
    </Box>
  );

};

export default HomePage;