import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Counter } from "./Counter";
import { CounterContext } from "./CounterContext";

describe("Counter", () => {
    const { getByTestId } = render(
        <CounterContext.Provider value={{ count: 0 }}>
            <Counter />
        </CounterContext.Provider>
    );

    test("Default count is 0", () => {
        expect(getByTestId("count")).toHaveTextContent("The count is: 0");
    });

    test("Clicking increment brings count to 1", () => {
        // fireEvent.click(getByTestId("increment-btn"));
        // expect(getByTestId("counter")).toHaveTextContent("The count is: 1");
    });
});
