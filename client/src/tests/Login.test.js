import { render as testRender, screen } from "@testing-library/react";
import Login from "../pages/Login";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const render = (component) =>
  testRender(<Provider store={store}>{component}</Provider>);

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("username value should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});
