import React, { useState, useEffect } from "react";
import { Button, Typography, TextField, Grid, Card } from "@mui/material";
import { styled } from "@mui/system";
import ProgramPane from "./ProgramPane";

const Container = styled("div")({
	display: "flex",
	margin: "auto",
	marginTop: 40,
	width: 800,
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
});
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
	programList: Program[];
}
const ProgramListDisplay = (props: ProgramProps) => {
	return (
		<Container>
			{props.programList.map((program, index) => {
				return <ProgramPane program={program} key={index} />;
			})}
		</Container>
	);
};

export default ProgramListDisplay;
