import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom/extend-expect";

describe("<Button/>", () => {
    const fakeFunction = jest.fn();
    const { getByTestId } = render(
        <Button testid="button" label="increment" onClick={fakeFunction} />
    );

    it("displays correct label", () => {
        expect(getByTestId("button")).toHaveTextContent("increment");
    });

    it("executes onClick function", () => {
        const { getByTestId } = render(
            <Button testid="button" label="increment" onClick={fakeFunction} />
        );
        fireEvent.click(getByTestId("button"));
        expect(fakeFunction).toHaveBeenCalled();
    });
});
