import React from "react";

export const Button = ({ onClick, label }) => (
    <button className="btn" onClick={onClick}>
        {label}
    </button>
);
