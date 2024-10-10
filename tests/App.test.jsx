import { render, screen } from "@testing-library/react-native";
import App from "../App";

jest.mock("react-native-safe-area-context", () => {
  return {
    SafeAreaProvider: ({ children }) => children,
  };
});

test("renders correctly", () => {
  render(<App />);
  expect(screen.getByText("Welcome to Expo")).toBeTruthy();
});
