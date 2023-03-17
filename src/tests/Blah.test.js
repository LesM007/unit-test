import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Blah from "../views/Blah";

describe("Blah component", () => {
  afterEach(cleanup);

  it("test test test", async () => {
    const FAKE_USERS = [
      {
        id: 1,
        name: "Svampebob Firkant",
        company: {
          name: "Underwater, Inc.",
        },
      },
    ];
    const routes = [
      {
        path: "/blah",
        element: <Blah />,
        loader: () => FAKE_USERS,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/blah"],
    });
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      screen.getByRole("heading", { level: 2 });
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "Svampebob Firkant"
      );
    });
  });
});
