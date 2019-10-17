import React from "react";

export const Button = ({ onClick, testid, label }) => (
    <button data-testid={testid} className="btn" onClick={onClick}>
        {label}
    </button>
);
