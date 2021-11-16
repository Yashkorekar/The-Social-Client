import { MoreVert } from "@material-ui/icons"
import "./post.css"
import axios from 'axios'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

// time ago
import { format } from "timeago.js"

function Post({ post }) {

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    useEffect(() => {
        const fetchUser = async () => {

            const response = await axios.get(`user/${post.userId}`);
            setUser(response.data)
        }
        fetchUser();
    }, [post.userId])


    const likeHandler = () => {
        try {
            axios.put("/post/" + post._id + "/like", { userId: currentUser._id })
        } catch (err) {

        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* use a noavatar profile here */}
                        <Link to={`profile/${user.userId}`}>
                            <img className="postProfileImg" src={user.profilePicture || "noavatar.png"} alt="" />
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
                    <img src={post.img} alt="" className="postImg" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/lcs/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="assets/lcs/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
