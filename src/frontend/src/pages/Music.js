import React, { useEffect, useState } from 'react'
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "../music-repo/utils/StateProvider";
import SpotifyLogin from '../music-repo/Components/Login/SpotifyLogin'
import Player from '../music-repo/Components/Player/Player'
import { getTokenFromResponse } from "../music-repo/utils/spotifyAPI";
import './Music.css'

const spotify = new SpotifyWebApi();

function Music() {

    const [token, setToken] = useState(null);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {

        const hash = getTokenFromResponse();
        window.location.hash = '';
        const _token = hash.access_token;
        console.log(_token)

        if (_token) {
            setToken(_token);

            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                })
            })

            spotify.getMySavedTracks().then((savedTracks) => {
                dispatch({
                    type: "SET_SAVEDTRACKS",
                    savedTracks: savedTracks,
                })
            })

            spotify.getPlaylist('37i9dQZEVXcX5G0KDaOL6Z').then((res) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: res,
                })
            })

            spotify.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            );

            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
              });

        }
    }, [token, dispatch]);



    return (
        <div className='music'>
           {
                token ? (
                    <Player spotify={spotify} />
                ) : (
                    <SpotifyLogin />
                )
            } 
        </div>
    )
}

export default Music
