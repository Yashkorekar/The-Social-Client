import "./online.css"

function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
                <img
                    className="rightbarProfileImg"
                    src={user.profilePicture}
                    alt=""
                />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online
