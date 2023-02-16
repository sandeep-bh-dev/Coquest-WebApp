import React from "react";
import "./styles.css";
import { Divider, Typography, styled } from "@mui/material";

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
				borderRadius: "50%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "16px",
				height: "16px",
			}}
		>
			{value}
		</div>
	);
};

const ProgramCreateProgress = (props: { pgnum: number }) => {
	return (
		<div className="ProgressBarContainer" style={{ marginTop: "38px" }}>
			<div>
				<Ball state={props.pgnum >= 0} value={"1"} />
			</div>
			<Typography variant="body2">Basic Information</Typography>
			<Divider style={{ width: "40px", backgroundColor: "black" }} />
			<div>
				<Ball state={props.pgnum >= 1} value={"2"} />
			</div>
			<Typography variant="body2">Operations</Typography>
			<Divider style={{ width: "60px", backgroundColor: "black" }} />
			<div>
				<Ball state={props.pgnum >= 2} value={"3"} />
			</div>
			<Typography variant="body2">Budgeting</Typography>
			<Divider style={{ width: "60px", backgroundColor: "black" }} />
			<div>
				<Ball state={props.pgnum >= 3} value={"4"} />
			</div>
			<Typography variant="body2">Promotion</Typography>
		</div>
	);
};

export default ProgramCreateProgress;
