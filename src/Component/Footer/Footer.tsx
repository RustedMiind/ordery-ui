import { Link } from "react-router-dom"

// import photos
import logo  from "./Images/ORDERY.png"
import pizza from './Images/photo_5938390013479860542_m.jpg'
import burger from './Images/photo_5938390013479860539_m.jpg'
import pasta from './Images/photo_5938390013479860541_m.jpg'
import donuts from './Images/photo_5938390013479860543_m.jpg'

// import stylesheet 
import './style-footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/Menu" >Menu</Link>
        <Link to="/Create-user" >Create An Account</Link>
      </div>
      <div className="gallery">
        <div className="pizza" >
          <img src={pizza} alt="pizza" />
        </div>
        <div className="burger" >
          <img src={burger} alt="burger" />
        </div>
        <div className="pasta" >
          <img src={pasta} alt="pasta" />
        </div>
        <div className="donuts" >
          <img src={donuts} alt="donuts" />
        </div>
      </div>
    </div>
  )
}