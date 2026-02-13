import { useNavigate } from "react-router-dom"
import heartIcon from "../icons/heartcenter.svg"
import topheartIcon from "../icons/topheart.svg"
import "./Landingpage.css"

const Landingpage = () =>{
    const navigate = useNavigate()

    const handleCenterImageClick = () => {
        navigate("/home")
    }

    return(
        <div className="main">
            <div className="top cont">
                <div className="topimgcont">
                <hr />
                <img src={topheartIcon} />
                 <hr />
                 </div>
                 <p className="topqoute">I have been carrying this in my heart for you...</p>
            </div>
            <div className="center cont">
                <h1 className="love-text">Love</h1>
                <p className="love-quote">Ever since you stepped into my life, time itself dances with wonder, filling every day with your irreplaceable love.</p>
                <img className="center-heart-icon" src={topheartIcon} onClick={handleCenterImageClick} style={{ cursor: "pointer" }} />
            </div>
            <div className="bottom cont">
                <div className="bottomcont">
                <hr />
                <h1>forever</h1>
                <hr />
                </div>
            </div>
        </div>
    )
}


export default Landingpage;