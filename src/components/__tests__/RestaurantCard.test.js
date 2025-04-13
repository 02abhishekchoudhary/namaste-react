import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("Pizza Hut");
  expect(restaurantName).toBeInTheDocument();
});

it("Should render RestaurantCard Component with Open Label", () => {
  const PromotedRestaurant = withPromotedLabel(RestaurantCard);
  render(<PromotedRestaurant resData={MOCK_DATA} />);

  const label = screen.getByText("Open");
  expect(label).toBeInTheDocument();
});
