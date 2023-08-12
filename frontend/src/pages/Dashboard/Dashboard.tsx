import React from "react";
import WelcomeMessage from "../../components/WelcomeMessage";
import SearchBar from "../../components/SearchBar";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import MyTasksContainer from "../../components/MyTasksContainer";
import Maps from "../../components/Maps/Maps";
import PostContainer, { ImageBoxes } from "../../components/PostsContainer";
import CommunityTasks from "../../components/CommunityTasks";
import Members, { MemberProps } from "../../components/Members";
import { Grid, getAppBarUtilityClass } from "@mui/material";
import ExtendedSimpleCard from "../../components/ExtendedSimpleCard/SimpleCard";

const Container = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

// const SearchContainer = styled("div")({});

const Header = styled("div")({
	width: "90%",
	padding: 20,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

const CardCont = styled.div({
	display: "flex",
	flexDirection: "column",
	gap: 10,
	marginBottom: 10,
	width: "100%",
});

const DashColumns = styled("div")({
	display: "flex",
	width: "93%",
	height: 650,
	overflow: "hidden",
	"@media (max-width: 600px)": {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100%",
		justifyContent: "center",
	},
});

const DashColumn = styled.div({
	width: "100%",
	padding: 10,
	height: "100%",
});

function Dashboard() {
	return (
		<Container>
			<Header>
				<WelcomeMessage
					name="John Dory"
					communityName="Community name"
				/>
				{/* <SearchContainer>
					<SearchBar />
				</SearchContainer> */}
			</Header>
			<DashColumns>
				<DashColumn>
					<CardCont>
						<SimpleCard label="Community overview" />
						<SimpleCard label="My projects" />
						<SimpleCard label="Open projects" />
					</CardCont>
					<ExtendedSimpleCard label="Posts" />
				</DashColumn>
				<DashColumn>
					<MyTasksContainer label="My Tasks" seeAllLink="#" />
				</DashColumn>
				<DashColumn>
					<Maps />
				</DashColumn>
			</DashColumns>
			{/*
			
			
			<div
				style={{
					position: "relative",
					left: "215px",
					bottom: "1240px",
				}}
			>
				<PostContainer header="Posts"></PostContainer>
			</div>
			<div
				style={{
					position: "relative",
					left: "214px",
					bottom: "1220px",
				}}
			>
				<CommunityTasks />
			</div>
			<div
				style={{
					position: "relative",
					left: "867px",
					bottom: "1548px",
				}}
			>
				<Members
					users={["You", "Username", "Username", "Username"]}
					showAllLink="#"
					userRole={["Role", "Role", "Role", "Role"]}
				/>
			</div> */}
		</Container>
	);
}

export default Dashboard;
