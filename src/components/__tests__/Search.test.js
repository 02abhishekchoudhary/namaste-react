import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurant list for pizza input", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = await screen.findByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = await screen.findAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});
