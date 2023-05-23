import React from "react";
import { styled } from "@mui/system";
import { Grid, IconButton, Typography } from "@mui/material";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	width: "80%",
	marginBottom: 20,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === "light" ? "#4ECB71" : "#308fe8",
	},
}));
interface Program {
	name: string;
	location: string;
	description: string;
	progress: number | null;
	time: string | null;
	date: string | null;
	openSpots: number | null;
}
interface ProgramProps {
	program: Program;
}
const Container = styled("div")(({ theme }) => ({
	padding: 30,
	margin: "0 auto",
	[theme.breakpoints.down("sm")]: {
		width: "80%",
	},
}));

const Title = styled(Typography)({
	fontSize: 25,
	fontWeight: "525",
	marginBottom: 15,
});
const GridCol = styled(Grid)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
});
const ProgramPane = (props: ProgramProps) => {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={6} sm={7}>
					<Typography>
						{props.program.location !== null &&
						props.program.location !== ""
							? props.program.location
							: "(Not set yet)"}
					</Typography>
					<Title>{props.program.name}</Title>
					<Typography>{props.program.description}</Typography>
				</Grid>
				<GridCol item xs={4} sm={4}>
					<Typography>
						Progress:{" "}
						{props.program.progress !== null
							? props.program.progress
							: 0}
						%
					</Typography>

					<BorderLinearProgress
						variant="determinate"
						value={
							props.program.progress !== null
								? props.program.progress
								: 0
						}
					/>

					<Typography>
						<strong>Time: </strong>
						{props.program.time !== null &&
						props.program.time !== ""
							? props.program.time
							: "(Not set yet)"}
					</Typography>
					<Typography>
						<strong>Date: </strong>
						{props.program.date !== null &&
						props.program.date !== ""
							? props.program.date
							: "(Not set yet)"}
					</Typography>
					<Typography>
						<strong>Spots open: </strong>
						{props.program.openSpots !== null
							? props.program.openSpots
							: 0}{" "}
						seats left
					</Typography>
				</GridCol>
				<GridCol item xs={1}>
					<IconButton>
						<ArrowForwardIosIcon />
					</IconButton>
				</GridCol>
			</Grid>
		</Container>
	);
};

export default ProgramPane;
