import "./App.scss";
import React from "react";
import axios from "axios";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux/es/exports";
import { checkToken } from "./redux/middlwares/userMiddleware";
import { addMenuItems, MenuItemType } from "./redux/reducers/menuSlice";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Menu from "./pages/Menu";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    checkToken(dispatch);
    axios.get<MenuItemType[]>("/api/menu").then((res) => {
      dispatch(addMenuItems({ data: res.data }));
      console.log("Menu :", res);
    });
  }, []);

  const redirect = useNavigate();

  return (
    <div className="App">
      <Navbar
        loginCallback={() => {
          console.log(redirect("/register"));
        }}
        logo={{
          type: "image",
          payload:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNU70W7n6HPGwCdB4YdelSxKFzjYeDoNZS_g&usqp=CAU",
        }}
        userDropdown={<>DropDown</>}
        isUser={false}
        navLinks={
          <>
            <NavLink to={"./"}>Home</NavLink>
            <NavLink to={"./menu"}>Menu</NavLink>
            <NavLink to={"./cart"}>Cart</NavLink>
          </>
        }
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
