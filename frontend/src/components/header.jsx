import React from "react";
import "./header.css";

export default function Header(props) {
    return (
        <div className="header">
            <h1>Memora</h1>
            <button className="profile-pic-button">
                <i className="fa-solid fa-user"></i>
            </button>
            <button className="exit-btn">
                <ion-icon name="exit-outline"></ion-icon>
            </button>
        </div>
    );
}