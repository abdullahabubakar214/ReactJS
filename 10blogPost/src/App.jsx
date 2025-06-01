import React, { useEffect, useState } from "react";
// import "./App.css";
import authService from "../../10blogPost/src/appwrite/auth";
import { login, logout } from "../../10blogPost/src/store/authSlice";
import { useDispatch } from "react-redux";
import { Header, Footer } from "../../10blogPost/src/components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser() //this return promises.
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout()); //info in store will be update.
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>TODO {/* {<Outlet/} */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
