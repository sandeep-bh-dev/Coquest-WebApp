import React, { useState, useEffect } from "react";
import {
	Button,
	Typography,
	TextField,
	Grid,
	Card,
	Tab,
	Tabs,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchBar from "../../../components/SearchBar";
import ProgramListDisplay from "./ProgramViewComponents/ProgramListDisplay";
import { programs } from "../../../testing/TestProgramsData";

const Container = styled("div")({
	display: "flex",
	margin: "auto",
	marginTop: 40,
	width: "70%",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
});
const TitleField = styled(Typography)({
	marginTop: 5,
	fontWeight: 600,
	fontSize: "3vw",
	textAlign: "center",
});
const Spacer = styled("div")({
	width: "100%",
	height: 26,
});

const SubtitleWrapper = styled("div")({
	width: "100%",
});

const Header = styled("div")({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

const CustomTabs = styled(Tabs)({
	width: "100%",
	color: "black !important",
});
const CustomTab = styled(Tab)({
	width: "33.33%",
});
const tabStyle = {
	default_tab: {
		color: "#000000",
		opacity: 0.3,
	},
	active_tab: {
		color: "#000000",
	},
};

function TabPanel(props: any) {
	const { children, value, index } = props;

	return <div hidden={value !== index}>{value === index && children}</div>;
}
interface Program {
	name: string;
	location: string;
	description: string;
	progress: number;
	time: string;
	date: string;
	openSpots: number;
}
const ProgramView = () => {
	const [value, setValue] = React.useState("one");
	const [programsList, setProgramsList] = useState<Program[]>([]);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	useEffect(() => {
		setProgramsList(programs);
	}, []);

	return (
		<Container>
			<Header>
				<TitleField>Programs</TitleField>
				<SearchBar />
			</Header>
			<Spacer />
			<CustomTabs
				TabIndicatorProps={{ style: { backgroundColor: "black" } }}
				value={value}
				onChange={handleChange}
				aria-label="wrapped label tabs example"
			>
				<CustomTab
					style={
						value === "one"
							? tabStyle.active_tab
							: tabStyle.default_tab
					}
					value="one"
					label="Created by me"
					wrapped
				/>
				<CustomTab
					style={
						value === "two"
							? tabStyle.active_tab
							: tabStyle.default_tab
					}
					value="two"
					label="Participating in"
				/>
				<CustomTab
					style={
						value === "three"
							? tabStyle.active_tab
							: tabStyle.default_tab
					}
					value="three"
					label="Completed"
				/>
			</CustomTabs>
			<TabPanel value={value} index="one">
				<ProgramListDisplay programList={programsList} />
			</TabPanel>
			<TabPanel value={value} index="two">
				<div className="">Second page</div>
			</TabPanel>
			<TabPanel value={value} index="three">
				<div className="">Third page</div>
			</TabPanel>
		</Container>
	);
};

export default ProgramView;
