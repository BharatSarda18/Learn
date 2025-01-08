import React, { createContext, useReducer } from "react";

// 1. Initial State
const initialState = {
  targetNum: "",
  numbers: "",
  result: ""
};

// 2. Reducer Function
const appReducer = (state, action) => {
  console.log(state, "state")
  switch (action.type) {
    case "numbers":
      return { ...state, "numbers": action.payload };
    case "targetsum":
      return { ...state, "targetNum": action.payload };
    case "result":
      return { ...state, "result": action.payload };
    default:
      return state;
  }
};

// 3. Create Context
export const AppContext = createContext();

// 4. Provider Component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
