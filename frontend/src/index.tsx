import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import LeftSideBar from "./components/LeftSideBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./index.css";
import TaskCard from "./pages/Coop/CoopComponents/TaskCard";
import {
    Budgeting,
    BasicInformation,
    Operations,
    Promotion,
} from "./pages/Coop/CreateCoop";
import { Login } from "./pages/Login";
import CreateCoop from "./pages/Coop/CreateCoop/CreateCoop";

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
        path: "/pages/Coop",
        element: <CreateCoop />,
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
        path: "/Login",
        element: <Login />,
    },
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
