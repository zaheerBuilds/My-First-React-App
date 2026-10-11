import React from "react";
import './Ranking.css';

import group from "../../assets/cil-group.svg";
import globe from "../../assets/cil-globe-alt.svg";
import flag from "../../assets/cil-flag-alt.svg";
import plus from "../../assets/cil-plus.svg";


let Ranking = () => {
    return (
            <div id="ranking">
                <div className="rank">
                    <img src={group} alt="" />
                    <span className="header">40k
                        <img src={plus} alt="" />
                    </span>
                    <h2>GLOBAL RINKS</h2>
                </div>
                <div className="rank">
                    <img src={globe} alt="" />
                    <span className="header">30k
                        <img src={plus} alt="" />
                    </span>
                    <h2>GLOBAL CHAPTERS</h2>
                </div>
                <div className="rank">
                    <img src={flag} alt="" />
                    <span className="header">10k
                        <img src={plus} alt="" />
                    </span>
                    <h2>YEARS OF EXCELLENCE</h2>
                </div>
            </div>

    ) 
}



export default Ranking;