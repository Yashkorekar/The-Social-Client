import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { userParams } from "react-router"

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({})
    const username = userParams().username;
    useEffect(() => {
        const fetchUser = async () => {

            const response = await axios.get(`/user?userId=${username}`);
            setUser(response.data)
        }
        fetchUser();
    }, [post.userId])

    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                            <img src={user.coverPicture ? PF + user.coverPicture : PF + "profile/noCover.png"} alt="" className="profileCoverImg" />

                            <img src={user.profilePicture ? PF + user.profilePicture : PF + "profile/noAvatar.png"} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
