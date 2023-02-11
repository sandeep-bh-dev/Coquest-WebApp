import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./index.css";
import TaskCard from "./components/TaskCard";

import { Login } from "./pages/Login";
import { Notifications } from "./pages/Notifications";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<TaskCard
					name="Task Name"
					community="Community Name"
					location="Location"
					description="Some text here"
					type="small"
				/>
				<TaskCard
					name="Task Name"
					community="Community Name"
					location="Location"
					description="Some text here"
					type="large"
				/>
			</>
		),
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/notifications",
		element: <Notifications />,
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
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Toolbar />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
