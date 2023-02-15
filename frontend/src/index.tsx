import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import LeftSideBar from "./components/LeftSideBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./index.css";
import TaskCard from "./components/TaskCard";

// Program flow Imports
import { CreateProgram } from "./pages/Programs/CreateProgram";
import { BasicInformation } from "./pages/Programs/CreateProgram/BasicInformation";
import { Operations } from "./pages/Programs/CreateProgram/Operations";
import { Budgeting } from "./pages/Programs/CreateProgram/Budgeting";
import { Promotion } from "./pages/Programs/CreateProgram/Promotion";

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
		//delete
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
	}, //delete
]);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Toolbar />
			<LeftSideBar />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
