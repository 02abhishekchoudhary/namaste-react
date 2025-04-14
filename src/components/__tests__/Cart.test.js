import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  // Loading fallback
  expect(await screen.findByText("Loading..")).toBeInTheDocument();

  // Expand category
  const header = await screen.findByText("Drinks & Desserts");
  fireEvent.click(header);

  const foodItems = await screen.findAllByTestId("foodItem");
  expect(foodItems.length).toBe(15);

  // Cart starts empty
  expect(await screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  // Add items to cart
  const addBtns = await screen.findAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  // Cart updates
  expect(await screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  // Menu + cart items now visible
  const updatedFoodItems = await screen.findAllByTestId("foodItem");
  expect(updatedFoodItems.length).toBe(17);

  // Clear the cart
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  // Now re-check updated DOM after clear
  const foodItemsAfterClear = await screen.findAllByTestId("foodItem");
  expect(foodItemsAfterClear.length).toBe(15);

  // Empty cart message
  expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
});
