import React, { useState } from "react";
import { Count } from "./Count";
import { Button } from "../button/Button";
import "./Counter.css";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <section data-testid="counter" className="component">
            <Button
                testId="increment-btn"
                onClick={() => setCount(count + 1)}
                label="increment"
            />
            <Button
                testId="decrement-btn"
                onClick={() => setCount(count - 1)}
                label="decrement"
            />
            <Count currentCount={count} />
        </section>
    );
};
