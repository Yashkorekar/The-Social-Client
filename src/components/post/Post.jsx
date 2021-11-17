import { MoreVert } from "@material-ui/icons";
import "./post.css";
import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// time ago
import { format } from "timeago.js";

function Post({ post }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/user?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/post/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* use a noavatar profile here */}
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || PF+"profile/noProfile.png"}
                alt=""
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* ? for some of the post dont have description */}
          <span className="postText">{post?.desc}</span>
          {/* post image */}
          <img src={PF+post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/profile/heart.png"
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <img
              src="assets/profile/like.png"
              alt=""
              onClick={likeHandler}
              className="likeIcon"
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
