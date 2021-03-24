import React from 'react'
import { accessUrl } from "../../utils/spotifyAPI";
import "./SpotifyLogin.css";


function SpotifyLogin() {
    return (
        <div className='app'>
            <div className='title'>
                <h1>EXPLORE MUSIC WORLD </h1>
                <h3>Empowered by <span className='word-color'>Spotify</span> API</h3>
            </div>
            <div className='container'>
                <div className='login-image'>
                    <img
                        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                        alt=""
                    />
                </div>
                <div className='login-here'>
                    <a className='your-music' href={accessUrl}>LOGIN FOR YOUR MUSIC</a>
                    <a className='my-music' href={accessUrl}>CHECK OUT MY MUSIC</a>
                </div>
            </div>
        </div>
    )
}

export default SpotifyLogin
