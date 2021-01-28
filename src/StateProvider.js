import React, { createContext, useContext, useReducer } from "react";

// preparing the data layer.
export const StateContext = createContext();

// wrap our app and provide the Data layer to all our app.
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer.
export default StateProvider;
export const useStateValue = () => useContext(StateContext);
