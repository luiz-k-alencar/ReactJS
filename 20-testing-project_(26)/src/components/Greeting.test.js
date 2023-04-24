import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    //   Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElemnt = screen.getByText("Hello World!");
    expect(helloWorldElemnt).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElemnt = screen.getByText("good to see you", { exact: false });
    expect(outputElemnt).toBeInTheDocument();
});

  test("renders 'Changed!' if the button was clicked", () => {
      // Arrange
      render(<Greeting />);
      
      // Act
      const buttonElemnt = screen.getByRole('button')
      userEvent.click(buttonElemnt)
      
      // Assert
      const outputElemnt = screen.getByText("Changed!");
      expect(outputElemnt).toBeInTheDocument();
  });

  test("does not renders 'good to see you' if the button was clicked", () => {
      // Arrange
      render(<Greeting />);
      
      // Act
      const buttonElemnt = screen.getByRole('button')
      userEvent.click(buttonElemnt)
      
      // Assert
      const outputElemnt = screen.queryByText('good to see you', {exact: false});
      expect(outputElemnt).toBeNull();
  });
});
