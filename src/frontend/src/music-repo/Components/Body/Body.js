import React from 'react'
import './Body.css'
import Header from '../Header/Header'
import Search from '../Search/Search'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateValue } from "../../utils/StateProvider";
import SongRow from "../SongRow/SongRow";


function Body( {spotify} ) {

    const [{ discover_weekly }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify.play({
            context_url: `spotify:playlist:37i9dQZEVXcX5G0KDaOL6Z`,
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                })
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                })
            })
        })
    }

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`],
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                })
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                })
            })
        })
    }


    return (
        <div className='body'>

            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon
                        className="body_shuffle"
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                <SongRow playSong={playSong} track={item.track} />
                ))}
            </div>

            <Search spotify={spotify} />
        </div>
    )
}

export default Body
