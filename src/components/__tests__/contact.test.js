import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button insidde contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // const button = screen.getByText("Random");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Itachi Uchia");
    // Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should load two input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);
    // Assertion
    // expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
