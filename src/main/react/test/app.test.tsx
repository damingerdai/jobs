import { App } from '../src/app';
import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'; // Add this import statement

const TestElements = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>Up</button>
      <button
        disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Down
      </button>
    </>
  );
};

describe('App', () => {
	afterEach(cleanup);

	it("should equal to 0", () => {
		const { getByTestId } = render(<TestElements />);
		expect(getByTestId("counter")).toHaveTextContent('0');
	});
});
