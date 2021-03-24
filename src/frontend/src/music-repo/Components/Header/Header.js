import React, {useEffect} from "react";
import "./Header.css";
import { useStateValue } from "../../utils/StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


function Header({ spotify }) {

    const [{ user }, dispatch] = useStateValue();
    var image;
    if (user?.images.length === 0) {
        image = '/files/head.jpeg'
    } else {
        image = user?.images[0].url
    }

    return (
        <div className="header">
            <div className="header_left">
            <SearchIcon />
            <input
                placeholder="TODO: Implement search function "
                type="text"
            />
            </div>
            <div className="header_right">
            <Avatar alt={user?.display_name} src={image} />
            <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
