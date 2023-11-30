import React from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
