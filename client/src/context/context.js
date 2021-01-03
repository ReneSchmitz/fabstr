import React, { useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";
import PropTypes from "prop-types";

export const AuthProvider = ({ children }) => {
  const [mail, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={mail}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider.");
  }
  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider.");
  }
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};
