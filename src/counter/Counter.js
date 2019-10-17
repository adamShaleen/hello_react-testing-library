import React, { useContext } from "react";
import { Count } from "./Count";
import { Button } from "../button/Button";
import "./Counter.css";
import { CounterContext } from "./CounterContext";

export const Counter = () => {
    const { count, setCount } = useContext(CounterContext);

    return (
        <section data-testid="counter" className="component">
            <Button
                testid="increment-btn"
                onClick={() => setCount(count + 1)}
                label="increment"
            />
            <Button
                testid="decrement-btn"
                onClick={() => setCount(count - 1)}
                label="decrement"
            />
            <Count currentCount={count} />
        </section>
    );
};
