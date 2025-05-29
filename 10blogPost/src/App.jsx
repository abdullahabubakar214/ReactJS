import React, { useEffect, useState } from "react";
// import "./App.css";
import authservice from "../../10blogPost/src/appwrite/auth";
import { login, logout } from "../../10blogPost/src/store/authSlice";
import { useDispatch } from "react-redux";
import { Header, Footer } from "../../10blogPost/src/components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" text-white-700 min-h-screen flex flex-wrap content-between bg-red-400">
      <div className="w-full block">
        <Header />
        <main>TODO {/* {<Outlet/} */}</main>
        <Footer />
      </div>
    </div>
  ) : null;

  // return (
  //   <>
  //     <div className="text-white-800 text-center my-5">Welcome to home</div>
  //   </>
  // );
}

export default App;
