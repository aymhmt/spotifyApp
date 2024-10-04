import React from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const artists = [
    { name: "Eminem", img: "eminem.jpeg" },
    { name: "Billie Eilish", img: "billie.jpeg" },
    { name: "Bad", img: "bad.jpeg" },
    { name: "Greedy", img: "greedy.jpeg" },
    { name: "Taylor Swift", img: "taylor.jpeg" },
    { name: "Ariana", img: "ariana.jpeg" },
    { name: "Pop Smoke", img: "pop.jpeg" }
];

function Main(){
    return(
        <div className="main">
            <header className="header">
                <div className="title">
                    <p>Good Morning.</p>
                    <h5>Muhammet</h5>
                </div>
                <div className="bildirim">
                    <FontAwesomeIcon icon={faBell} className="notification-icon" />
                </div>
            </header>
            <div className="body">
                <div className="title-two">
                    <h1>Welcome to <span>Spotify.</span>
                        <br/>World of Music.
                    </h1>
                </div>
                <div className="kategori">
                    <div className="button">
                        <span>All</span>
                    </div>
                    <div className="button">
                        <span>Music</span>
                    </div>
                    <div className="button">
                        <span>Podcast</span>
                    </div>
                    <div className="button">
                        <span>Rock</span>
                    </div>
                </div>
            </div>

            <div className="for-you">
                <div className="for-title">
                    <h3>Made for You</h3>
                    <p>See all</p>
                </div>
                <div className="album">
                <div className="music">
                    <img src="greedy.jpeg"/>
                    <h3>Greedy</h3>
                    <p>Tate McRae</p>
                </div>
                <div className="music">
                    <img src="taylor.jpeg"/>
                    <h3>Taylor</h3>
                    <p>Tate McRae</p>
                </div>
                <div className="music">
                    <img src="pop.jpeg"/>
                    <h3>Pop Smoke</h3>
                    <p>Tate McRae</p>
                </div>
                </div>
            </div>
            <div className="favori">
                <div className="favori-title">
                    <h3>Favourite Artists</h3>
                    <p>See all</p>
                </div>
                <div className="artist">
                    {artists.map((artist, index) => (
                        <div key={index} className="profile">
                            <img src={artist.img} alt={artist.name} />
                            <span>{artist.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main