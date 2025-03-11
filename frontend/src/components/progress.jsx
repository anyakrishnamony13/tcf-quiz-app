import React from "react";
import "./progress_bar.css";

export default function Progress(props) {
    const { currentProgress, totalProgress } = props;
    const TotalProgressPercent = totalProgress ? Math.round((currentProgress/totalProgress) * 100) : 0;

    return (
        <section>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${TotalProgressPercent}%` }}></div>
            </div>
            <p className="progress-text">Progress: {currentProgress}/{totalProgress}</p>
        </section>
    );
}