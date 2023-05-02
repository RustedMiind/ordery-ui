import { Link } from "react-router-dom";
// import styleSheet
import "./style-login.scss";
export default function LogIn() {
  return (
    <div className="form-login">
      <div className="title">
        <h3>Welcome Back!</h3>
      </div>
      <form>
        <label>
          <span>Phone</span>
          <input type="text" placeholder="+20" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="password" />
        </label>
        <Link to="/forgot-password">Forgot Password</Link>
        <input type="submit" value="Log-In" />
        <p className="no-acc">
          Dont Have An Account?{" "}
          <span>
            <Link to="/Create-user">Sign-Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
