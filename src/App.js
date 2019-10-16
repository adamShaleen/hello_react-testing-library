import React from "react";
import { Counter } from "./counter/Counter";
import { CounterContextProvider } from "./counter/CounterContext";

export const App = () => (
    <>
        <CounterContextProvider>
            <Counter />
        </CounterContextProvider>
    </>
);
