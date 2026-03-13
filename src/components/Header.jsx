// import './Header.css'
// import "./Header.css";
// import man from "../assets/person1.png";
// import man2 from "../assets/za.webp";


// const Header = () => {
//     return (
//         <header className="header">
//             <div className="header">

//                 <div className="text">
//                     <h1>Our team</h1>
//                     <p>The best company around the globe called Chine ITishniki</p>
//                 </div>
//             </div>                
//             <div className="p1">
//                     <h1>Valijonov Ibrohim</h1>
//                     <p> Leader:  <br /> Let's get acquainted, I currently study Ensligh and IT because It opens up new opportunities. I am 15 years old.  </p>
//                  <img src={man} className="profile" />
//                  </div>
//                   <div className="p1">
//                     <h1>Valijonov Zakariyo</h1>
//                     <p> Member 1:  <br /> Давайте познакомимся. Сейчас я изучаю английский язык и информационные технологии, потому что это открывает новые возможности. Мне 15 лет.  </p>
//                  <img src={man2} className="profile" />
//                  </div>
//         </header>
        
//     )
// }

// export default Header;
import "./Header.css";
import man from "../assets/person1.png";
import man2 from "../assets/za.webp";

const Header = () => {
  return (
    <header className="header">

      <div className="header-top">
        <h1>Our Team</h1>
        <p>The best company around the globe called <span>Chine ITishniki</span></p>
      </div>

      <div className="team">

        <div className="card">
          <img src={man} className="profile" />

          <h2>Valijonov Ibrohim</h2>
          <h4>Leader</h4>

          <p>
            Let's get acquainted. I study English and IT because it opens new
            opportunities. I am 15 years old.
          </p>
        </div>

        <div className="card">
          <img src={man2} className="profile" />

          <h2>Valijonov Zakariyo</h2>
          <h4>Member</h4>

          <p>
            Сейчас я изучаю английский язык и IT,
            потому что это открывает новые возможности.
            Мне 15 лет.
          </p>
        </div>

      </div>

    </header>
  );
};

export default Header;