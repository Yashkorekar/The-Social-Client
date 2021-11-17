import "./feed.css";
import Share from "../share/Share"
import Post from "../post/Post"
import axios from 'axios'
import { useState, useEffect } from "react";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchposts = async () => {


      const response = username ? todo : await axios.get("/timeline/");
      // arranging the posts based on the created at time in descending order
      setPosts(response.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }))
    }
    fetchposts();
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username === user.username && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}

      </div>
    </div>
  );
}

export default Feed;
