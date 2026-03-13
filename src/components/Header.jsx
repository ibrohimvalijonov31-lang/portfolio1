import './Header.css'
import "./Header.css";
import man from "../assets/person1.png";


const Header = () => {
    return (
        <header className="header">
            <div className="header">

                <div className="text">
                    <h1>Our team</h1>
                    <p>The best company around the globe called Chine ITishniki</p>
                </div>
            </div>                <div className="p1">
                    <h1>Valijonov Ibrohim</h1>
                    <p> Leader:  <br /> Let's get acquainted, I currently study Ensligh and IT because It opens up new opportunities. I am 15 years old.  </p>
                 <img src={man} className="profile" />
                 </div>
        </header>
        
    )
}

export default Header