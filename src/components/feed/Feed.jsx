import "./feed.css";
import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);


  //get posts from server
  useEffect(() => {
    const fetchposts = async () => {
      const response = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("/post/timeline/" + user._id);
      // arranging the posts based on the created at time in descending order
      setPosts(
        response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchposts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
