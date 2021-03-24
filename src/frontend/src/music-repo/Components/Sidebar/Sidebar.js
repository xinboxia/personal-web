import React from 'react'
import './Sidebar.css'
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "../../utils/spotifyAPI";
import { useStateValue } from "../../utils/StateProvider";


function Sidebar() {

    const [ { playlists}, dispatch ] = useStateValue();
    console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="/images/spotify.jpeg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

    </div>
  );
}

export default Sidebar;
