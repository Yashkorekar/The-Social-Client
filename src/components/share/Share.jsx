import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();

  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    // new post
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // filename conflict solver
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("file", file);
      data.append("name", filename);
      newPost.img = filename;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      // SENDING POST AND RELOADING THE PAGE ON CLIENT SIDE
      await axios.post("/post", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "/profile/noProfile.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder={"whats on your mind? " + user.username + "?"}
            ref={desc}
            className="shareInput"
          />
        </div>
        {/* share Hr Line */}
        <hr className="shareHr" />
        {/* preview and cancel the file logic goes here */}

        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
