import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Param");
  return (
    <div className="bg-primary p-5">
<h1 className="text-white">User Provider</h1>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
    </div>
  );
};
