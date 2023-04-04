import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import LeftSideBar from "./components/LeftSideBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Message } from "./pages/Message";
import { Notifications } from "./pages/Notifications";
import "./index.css";
import ItemGrid from "./pages/Inventory/ItemGrid";
import TaskCard from "./components/TaskCard";
import { Dashboard } from "./pages/Dashboard";
=======
import WalletPage from "./pages/Wallet/WalletPage";

// Program flow Imports
import {
	BasicInformation,
	Budgeting,
	CreateProgram,
	Operations,
	Promotion,
} from "./pages/Programs/CreateProgram";

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
	{
		path: "/programs/create",
		element: <CreateProgram />,
		children: [
			{
				path: "basic-information",
				element: <BasicInformation />,
			},
			{
				path: "operations",
				element: <Operations />,
			},
			{
				path: "budgeting",
				element: <Budgeting />,
			},
			{
				path: "promotion",
				element: <Promotion />,
			},
		],
	},
	{
		path: "/message",
		element: <Message />,
	},
	{
		path: "/notifications",
		element: <Notifications />,
	},
  {
    path: "/inventory",
		element: <ItemGrid />,
  },
	{
		path: "/wallet",
		element: <WalletPage />,
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
