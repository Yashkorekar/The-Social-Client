import AuthReducer from "./AuthReducer";
import React from "react";
import { createContext, useReducer, useEffect } from "react";
const INITIAL_STATE = {
  user: {
    _id: "6194e4c4e800f3b6345480ae",
    username: "Dhiraj",
    email: "dhiraj@gmail.com",
    profilePicture: "profile/2.jpeg",
    coverPicture: "profile/noCover.jpg",
    followers: ["619501ee7eb2bb7659e01fc2", "619501ee7eb2bb7659e01fc0"],

    following: ["619501ee7eb2bb7659e01fc2", "619501ee7eb2bb7659e01fc0"],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
