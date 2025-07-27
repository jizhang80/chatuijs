"use client";
// UserContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // store token in localStorage/sessionStorage, or cookie?
  };

  const logout = () => {
    setUser(null);
    // clear token in localStorage/sessionStorage, or cookie?
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

// // How to use it
//     // App.js (or a parent component)
//     import { UserProvider } from './UserContext';

//     function App() {
//       return (
//         <UserProvider>
//           {/* Your application components */}
//         </UserProvider>
//       );
//     }

//     // ChildComponent.js
//     import { useUser } from './UserContext';

//     function ChildComponent() {
//       const { user, logout } = useUser();

//       if (!user) {
//         return <p>Please log in.</p>;
//       }

//       return (
//         <div>
//           <p>Welcome, {user.username}!</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       );
//     }
