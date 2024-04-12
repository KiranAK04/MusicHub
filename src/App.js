import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Index from "./Components/Index";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Admin from "./Dashbord/Admin";
import Customer from "./Dashbord/Customer";
import Newsong from "./Dashbord/Newsong";
import ViewSong from "./Dashbord/Viewsong";
import CreatePlaylist from "./Dashbord/CreatePlaylist";
import ViewPlaylist from "./Dashbord/ViewPlaylist";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/viewsong" element={<ViewSong />}></Route>
          <Route path="/newsong" element={<Newsong />}></Route>
          <Route path="/createplaylists" element={<CreatePlaylist />}></Route>
          <Route path="/viewplaylists" element={<ViewPlaylist />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
