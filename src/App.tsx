import "./App.css";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { checkToken } from "./redux/middlwares/userMiddleware";
import { addMenuItems, MenuItemType } from "./redux/reducers/menuSlice";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    checkToken(dispatch);
    axios.get<MenuItemType[]>("/api/menu").then((res) => {
      dispatch(addMenuItems({ data: res.data }));
      console.log("Menu :", res);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
