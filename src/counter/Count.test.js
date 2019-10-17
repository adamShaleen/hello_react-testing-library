import React from "react";
import { render } from "@testing-library/react";
import { Count } from "./Count";
import "@testing-library/jest-dom/extend-expect";

describe("<Count/>", () => {
    it("renders the correct count", () => {
        const { getByTestId } = render(<Count currentCount={3} />);
        expect(getByTestId("count")).toHaveTextContent("The count is: 3");
    });
});
