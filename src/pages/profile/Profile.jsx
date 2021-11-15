import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useState, useEffect } from "react";

function Profile() {

    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
    
          const response = await axios.get(`/user?userId=${post.userId}`);
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

                        <img src="" alt="" className="profileCoverImg" />

                        <img src="assets/profile/3.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">vedant fate</h4>
                            <span className="profileInfoDesc">tiwari set ka 20 lakh dena hai</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
