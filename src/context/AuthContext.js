import { createContext, useState, useEffect } from "react";

export const Auth = createContext("");

const Context = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")): null);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export default Context;
