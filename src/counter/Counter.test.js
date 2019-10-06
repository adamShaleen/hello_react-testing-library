import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Counter } from "./Counter";

describe("Counter", () => {
    const { getByTestId } = render(<Counter />);
    const CountComponent = getByTestId("count");

    const defaultState = "The count is: 0";
    const incrementedState = "The count is: 1";

    it("currentCount increments from 0 to 1 and decrements back to 0", () => {
        expect(CountComponent).toHaveTextContent(defaultState);
        fireEvent.click(getByTestId("increment-btn"));
        expect(CountComponent).toHaveTextContent(incrementedState);
        fireEvent.click(getByTestId("decrement-btn"));
        expect(CountComponent).toHaveTextContent(defaultState);
    });
});
