import React from "react";
import './Board.css';

import jack from "../../assets/jack.png";

const Board = () => {
    return (
        <div id="board">
            <h2>Meet the Board</h2>
            <p className="boardMsg">The dedicated alumni leading our association toward a brighter, more connected future.</p>
            <div className="board1">
                <div className="boardCard">
                    <img src={jack} alt="" />
                    <div className="boardCardDesc">
                        <h4>Ahmad Shah</h4>
                        <p>PRESIDENT</p>
                        <p>Class of 2005, Computer Science</p>
                    </div>
                </div>
                <div className="boardCard">
                    <img src={jack} alt="" />
                    <div className="boardCardDesc">
                        <h4>Ahmad Shah</h4>
                        <p>PRESIDENT</p>
                        <p>Class of 2005, Computer Science</p>
                    </div>
                </div>
                <div className="boardCard">
                    <img src={jack} alt="" />
                    <div className="boardCardDesc">
                        <h4>Ahmad Shah</h4>
                        <p>PRESIDENT</p>
                        <p>Class of 2005, Computer Science</p>
                    </div>
                </div>
                <div className="boardCard">
                    <img src={jack} alt="" />
                    <div className="boardCardDesc">
                        <h4>Ahmad Shah</h4>
                        <p>PRESIDENT</p>
                        <p>Class of 2005, Computer Science</p>
                    </div>
                </div>
                
            </div>
            <div className="board2">
                <h1>Ready to connect with your zaheerBuilds family?</h1>
                <p>Join thousand of gurantees and special students which they settle their self without any doubt and fear</p>
                <button className="registerBtn">
                    Register with Us
                </button>
            </div>
        </div>
    )
}


export default Board;