import React from "react";

export const Button = ({ onClick, testId, label }) => (
    <button data-testid={testId} className="btn" onClick={onClick}>
        {label}
    </button>
);
