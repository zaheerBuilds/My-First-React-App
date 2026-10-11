import React from "react";
import './Mission.css';

import user from "../../assets/cil-user.svg";
import history from "../../assets/cil-history.svg";
import notes from "../../assets/cil-notes.svg";
import simon from "../../assets/simon.png";


let Mission = () => {
    return (
        <div id="mission">
            <h2 className="missionHeader">
                Our Mission & History
            </h2>
            <div className="missionCards">
                <div className="missionCard">
                    <img src={user} alt="" />
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore consequuntur debitis amet placeat doloremque nulla ullam expedita ipsa quaerat aspernatur culpa id repellendus temporibus, voluptates autem perspiciatis repellat magni!</p>
                </div>
                <div className="missionCard">
                    <img src={history} alt="" />
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore consequuntur debitis amet placeat doloremque nulla ullam expedita ipsa quaerat aspernatur culpa id repellendus temporibus, voluptates autem perspiciatis repellat magni!</p>
                </div>
            </div>
            <div className="missionMessage">
                <div className="missionMsgText">
                    <img src={notes} alt="" />
                    <h3>Message from chancellor</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolore quia numquam ratione sed sit qui? Pariatur impedit quas nesciunt magni autem temporibus odio, deserunt eos voluptatum saepe nulla consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, doloremque inventore officia harum nihil ab accusamus cumque? In quis ea doloremque reprehenderit, laborum similique soluta necessitatibus excepturi veritatis aut recusandae!</p>
                    <h5>Pro.Dr.Abdul Rahman</h5>
                    <p>chancellor, Kabul Polytechnic Universit</p>
                    <h5>READ FULL MESSAE --)</h5>
                </div>
                <img src={simon} className="simonImg" />
            </div>
        </div>
    ) 
}


export default Mission;