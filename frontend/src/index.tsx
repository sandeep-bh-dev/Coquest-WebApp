import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import LeftSideBar from "./components/LeftSideBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./index.css";
import TaskCard from "./components/TaskCard";
import { Dashboard } from "./pages/Dashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  {
    path: "/home",
    element: (
      <div>
        <b>Home</b>
      </div>
    ),
  },
]);

root.render(
  <div>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Toolbar />
        <LeftSideBar />
        <Dashboard />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  </div>
);
