import { NavLink } from "react-router-dom"
import logo  from "./ORDERY.png"
import { BoxArrowInRight } from "react-bootstrap-icons"
import './style-header.scss'
export default function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Menu">Menu</NavLink>
      </div>
      <div className="icon">
        <BoxArrowInRight />
      </div>
    </div>
  )
}
