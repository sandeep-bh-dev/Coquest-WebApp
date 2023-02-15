import React from "react";
import "./styles.css";
import { Divider, Typography, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

const ProgramCreateProgress = (props: { pgnum: number }) => {
	console.log(`Value recieveed : ${props.pgnum}`);
	return (
		<Grid
			container
			spacing={3}
			style={{
				display: "flex",
				justifyContent: "space-around",
				marginTop: "38px",
			}}
		>
			<Grid
				item
				xs={2}
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<div style={{ marginRight: 6 }}>
					{props.pgnum >= 0 ? (
						<Ball state value={"1"} />
					) : (
						<Ball value={"1"} />
					)}
				</div>
				<Typography variant="body2">Basic Information</Typography>
				<Divider style={{ width: "20px", backgroundColor: "black" }} />
			</Grid>

			<Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
				<div style={{ marginRight: 6 }}>
					{props.pgnum >= 1 ? (
						<Ball state value={"2"} />
					) : (
						<Ball value={"2"} />
					)}
				</div>
				<Typography variant="body2">Operations</Typography>
				<Divider style={{ width: "20px", backgroundColor: "black" }} />
			</Grid>
			<Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
				<div style={{ marginRight: 6 }}>
					{props.pgnum >= 2 ? (
						<Ball state value={"3"} />
					) : (
						<Ball value={"3"} />
					)}
				</div>
				<Typography variant="body2">Budgeting</Typography>
				<Divider style={{ width: "20px", backgroundColor: "black" }} />
			</Grid>
			<Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
				<div style={{ marginRight: 6 }}>
					{props.pgnum >= 3 ? (
						<Ball state value={"4"} />
					) : (
						<Ball value={"4"} />
					)}
				</div>
				<Typography variant="body2">Promotion</Typography>
			</Grid>
		</Grid>
	);
};

export default ProgramCreateProgress;
