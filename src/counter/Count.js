import React from "react";

export const Count = ({ currentCount }) => (
    <h1 data-testid="count" className="count">
        The count is: {currentCount}
    </h1>
);
