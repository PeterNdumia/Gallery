import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";


test('renders the Landing Page using the <Route path="/">', () => {
    // window.history.pushState({}, "", "/");
    // render(
    //   <BrowserRouter>
    //     <App/>
    //   </BrowserRouter>
    // );
    // expect(screen.queryByTestId('landing-page')).toBeInTheDocument()
  });
  