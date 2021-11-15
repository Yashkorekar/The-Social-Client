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
      setPosts(response.data)
    }
    fetchposts();
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}

      </div>
    </div>
  );
}

export default Feed;
