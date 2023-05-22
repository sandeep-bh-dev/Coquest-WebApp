import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

interface Program {
	name: string;
	location: string;
	description: string;
	progress: number;
	time: string;
	date: string;
	openSpots: number;
}
interface ProgramProps {
	program: Program;
}
const Container = styled("div")({
	borderBottom: "1px solid black",
	width: "100%",
	padding: 30,
});

const Title = styled(Typography)({
	fontSize: 30,
	fontWeight: "525",
	marginBottom: 15,
});

const ProgramPane = (props: ProgramProps) => {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={7}>
					<Typography>{props.program.location}</Typography>
					<Title>{props.program.name}</Title>
					<Typography>{props.program.description}</Typography>
				</Grid>
				<Grid item xs={5}>
					<Typography>Progress: {props.program.progress}%</Typography>
					<LinearProgress color="success" thickness="3" />
					<Typography>
						<strong>Time: </strong>
						{props.program.time}
					</Typography>
					<Typography>
						<strong>Date: </strong>
						{props.program.date}
					</Typography>
					<Typography>
						<strong>Spots open: </strong>
						{props.program.openSpots} seats left
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProgramPane;
