import React from "react";
import { render } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
    it("displays the count", () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId("counter"));
    });
});
