import React from "react";
import UserContext from "../context/context";
import { useState } from "react";

const contextProvider = ({ childern }) => {
  const [user, setUser] = useState(null);

  return (
    // Make a Rapper function of UserContext
    <UserContext.Provider value={{ user, setUser }}>
      {childern}
    </UserContext.Provider>
  );
};

export default contextProvider;
