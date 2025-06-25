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


  if (posts?.length === 0) {
    return (
      <h1>There are no post's available</h1>
    )
  }
  else {
    return (
      <Box>{posts && <PostList posts={posts} />}
      </Box>
    );
  }

};

export default HomePage;