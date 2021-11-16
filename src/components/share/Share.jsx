import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
function Share() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId =user._id,
      desc: desc.current.value,
    }
    try {
      await axios.post("/posts", newPost);
    } catch (err) {

    }
  }

  const [file, setFile] = useState(null)
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "profile/noPrfofile"} alt="" className="shareProfileImg" />
          <input placeholder={"whats on your mind? " + user.username + "?"} ref={desc} className="shareInput" />
        </div>
        <hr className="shareHr" />

        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <Label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText"> Photo/ video</span>
              <input style={{ display=none }} type="file" className="" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
            </Label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText"> Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText"> Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="orange" className="shareIcon" />
              <span className="shareOptionText"> Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
