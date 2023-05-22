import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	marginBottom: 20,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
	},
}));
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

const GridCol2 = styled(Grid)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
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
				<GridCol2 item xs={5}>
					<Typography>Progress: {props.program.progress}%</Typography>
					<BorderLinearProgress
						variant="determinate"
						value={props.program.progress}
					/>

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
				</GridCol2>
			</Grid>
		</Container>
	);
};

export default ProgramPane;
