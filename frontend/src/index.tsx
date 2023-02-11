import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Root</div>,
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
