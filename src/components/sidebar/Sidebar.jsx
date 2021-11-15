import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";
import {
  Bookmark,
  RssFeed,
  Event,
  School,
  WorkOutline,
  HelpOutline,
  PlayCircleFilledOutlined,
  Group,
  Chat,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* icons and leftbar top */}
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        {/* ^ the grey break line */}
        <ul className="sidebarFriendList">

          {/* friends */}
          {Users.map(u => (
            <CloseFriend key={u.id} user={u} />
          ))}


        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
