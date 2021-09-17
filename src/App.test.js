/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the App withouth crashing", () => {
  render(<App />);
});
