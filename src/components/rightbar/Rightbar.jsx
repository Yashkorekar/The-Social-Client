import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect } from "react";
import { Link } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
function rightbar({ user }) {

    // user Logic goes here
    const { user: currentUser } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    // getting the following array int the rightbar
    const [friends, setFriends] = useState([])

    //whether followed/unfollowed user
    const [followed, setFollowed] = useState(false)
    useEffect(() => {
        setFollowed(currentUser.following.include(user?.id))
    }, [currentUser, user.id])

    // we cant use async int the use effect so, 1) created a async await function 2) called it in use effect
    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/api/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        }
        getFriends();
    }, [user._id])

    //follow unfollow user click Handel
    const followHandleClick = async () => {
        try {
            if (followed) {
                await axios.put("/user/" + user._id + "/follow", { userId: currentUser._id })
            }
            else {
                await axios.put("/user/" + user._id + "/unfollow", { userId: currentUser._id })
            }
        }
        catch (err) {

            console.log(err);
        }
        // to update the following array
        setFollowed(!followed);
    }


    const HomeRightbar = () => {
        return (<>
            <div className="birthdayContainer">
                {/* birthday image */}
                <img src="assets/lcs/gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                    <b>Tiwari Seth </b>and <b>30 other</b> have birthdays
                </span>
            </div>
            {/* ad */}
            <img src="assets/lcs/ad.png" alt="" className="rightbarAd" />
            {/* freind List */}
            <h4 className="rightbarTitle">online friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u => (
                    <Online key={u.id} user={u} />
                ))}
            </ul>
        </>)
    }

    const ProfileRightbar = () => {
        return (
            <>
                {/* following button logic goes here */}
                {user.username != currentUser.username && (
                    <button className="rightbarFollowButton" onClick={followHandleClick}>
                        {followed ? "Unfollow" : "follow"}
                        {followed ? <Remove /> : <Add />}

                    </button>
                )}
                <h4 className="rightbarTitle">User Info.</h4>
                <div className="righbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "single" : user.relationship === 2 ? "Married" : ""}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Freinds</h4>
                <div className="rightbarFollowings">
                    {/* folowing users */}
                    {friends.map((friend) => (
                        <Link to={"/profile/" + friend.username} style={{ textDecoration: "none" }}>
                            <div className="rightbarFollowing">
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "profile/noAvatar.png"} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {/* container starts */}
                {user ? <ProfileRightbar /> : <HomeRightbar />}

            </div>
        </div>
    );
}

export default rightbar;
