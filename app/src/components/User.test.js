import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import User, { url } from "./User";


afterEach(() => {
    axios.get.mockClear();
  });


function mockCall() {
    axios.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            name: {
              first: "ali"
            }
          },
          {
            name: {
              first: "abu"
            }
          }
        ]
      }
    });
}

test("show loader when it's fetching data, then render users' name on rows", async () => {
    mockCall();

    //show loader
    const { getAllByTestId, getByText } = render(<User />);
    expect(getByText(/loading.../i)).toBeInTheDocument();
  
    //check what's rendered in the row
    const rowValues = await waitFor(() =>
      getAllByTestId("row").map(row => row.textContent)
    );

    expect(await screen.findByText('ali')).toBeInTheDocument();
    expect(rowValues).toEqual(["ali", "abu"]);
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });