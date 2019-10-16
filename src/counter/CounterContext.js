import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};
