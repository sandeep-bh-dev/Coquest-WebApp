import React from "react";
import "./styles.css";
import { Divider, Typography } from "@mui/material";

type BallProps = {
    value: string;
    state?: boolean;
};

const Ball = ({ state, value }: BallProps) => {
    return (
        <div
            className="BallStyles"
            style={{
                backgroundColor: state
                    ? "rgb(82, 133, 236)"
                    : "rgb(102, 102, 102)",
            }}
        >
            {value}
        </div>
    );
};

const ProgressBar = () => {
    return (
        <div
            className="ProgressBarContainer"
            style={{
                display: "flex",
                justifyContent: "center",
                padding: 30,
            }}
        >
            <Ball state value={"1"} />
            <Typography variant="body2">Sign up</Typography>
            <Divider style={{ width: "40px", backgroundColor: "black" }} />
            <Ball value={"2"} />
            <Typography variant="body2">Connect social media</Typography>
            <Divider style={{ width: "60px", backgroundColor: "black" }} />
            <Ball value={"3"} />
            <Typography variant="body2">Customize profiles</Typography>
            <Divider style={{ width: "60px", backgroundColor: "black" }} />
            <Ball value={"4"} />
            <Typography variant="body2">Join groups</Typography>
        </div>
    );
};

export default ProgressBar;
