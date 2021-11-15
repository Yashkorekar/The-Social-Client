import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function rightbar({ user }) {
    const HomeRightbar = () => {
        return (<>
            <div className="birthdayContainer">
                {/* birthday image */}
                <img src="assets/lcs/gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                    <b>pola foster </b>and <b>30 other</b> have birthdays
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
                <h4 className="rightbarTitle">User Information</h4>
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
                        <span className="rightbarInfoValue">{user.relationship===1 ?"single" : user.relationship===2?"Married":""}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Freinds</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/profile/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/profile/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/profile/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/profile/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/profile/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/profile/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

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
