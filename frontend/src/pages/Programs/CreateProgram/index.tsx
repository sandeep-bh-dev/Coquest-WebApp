import React, { useState, useEffect } from "react";
import ProgramCreateProgress from "../ProgramComponents/ProgramCreateProgress";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";

export const CreateProgram = () => {
	const location = useLocation();
	const [pageIndex, setPageIndex] = useState(0);
	const [currentPath, setCurrentPath] = useState(
		getCurrPath(location.pathname)
	);
	const paths = ["basic-information", "operations", "budgeting", "promotion"];

	useEffect(() => {
		setPageIndex(paths.indexOf(currentPath));
	}, []);

	console.log(currentPath);
	return (
		<Container>
			<ProgressBarContainer>
				<ProgramCreateProgress pgnum={pageIndex} />
			</ProgressBarContainer>
			<NavigateButtons>
				{pageIndex > 0 && (
					<Link
						style={{ textDecoration: "none" }}
						to={`${paths[pageIndex - 1]}`}
						onClick={() => {
							setCurrentPath(getCurrPath(location.pathname));
							setPageIndex(pageIndex - 1);
						}}
					>
						<Button
							style={{
								color: "black",
								fontWeight: 700,
								textTransform: "none",
								fontSize: 16,
								borderRadius: 30,
							}}
						>
							{"<"} Back
						</Button>
					</Link>
				)}
				{pageIndex < paths.length - 1 && (
					<Link
						style={{ textDecoration: "none" }}
						to={`${paths[pageIndex + 1]}`}
						onClick={() => {
							setCurrentPath(getCurrPath(location.pathname));
							console.log(pageIndex);
							setPageIndex(pageIndex + 1);
						}}
					>
						<Button
							variant="contained"
							disableElevation
							style={{
								marginLeft: 40,
								backgroundColor: "rgb(217, 217, 217)",
								color: "black",
								fontWeight: 700,
								textTransform: "none",
								fontSize: 16,
								borderRadius: 30,
							}}
						>
							Next
						</Button>
					</Link>
				)}
			</NavigateButtons>
			<Outlet />
		</Container>
	);
};

const Container = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
});

const NavigateButtons = styled("div")({
	width: "100%",
	display: "flex",
	justifyContent: "end",
	marginTop: 28,
	marginRight: 73,
});

const ProgressBarContainer = styled("div")({
	minWidth: 300,
	width: "60vw",
	maxWidth: 700,
});

const getCurrPath = (fullpath: string) => {
	return fullpath.substring(17, fullpath.length);
};
