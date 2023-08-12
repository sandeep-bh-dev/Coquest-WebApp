import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TaskCard from "../../pages/Coop/CoopComponents/TaskCard";

const Header = styled(Typography)({
	fontWeight: 600,
	paddingTop: 30,
	paddingLeft: 30,
	fontSize: "16px",
	lineHeight: "24px",
	color: "#0000000",
});

const CommunityContainer = styled.div({
	backgroundColor: "#D9D9D9",
	borderRadius: 20,
	width: "95%",
	height: 329,
	margin: "auto",
});

const CustomGrid = styled(Grid)({
	width: "100%",
	height: 250,
	overflow: "auto",
	margin: "auto",
	padding: 15,
	paddingTop: 0,
});
const taskContents = [
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
];

const CommunityTasks = () => {
	return (
		<CommunityContainer>
			<Header>All community tasks</Header>
			<CustomGrid container spacing={1}>
				{taskContents.map((item, index) => (
					<Grid item key={index} lg={4}>
						<TaskCard
							name={item.taskName}
							community={item.communityName}
							location={item.loction}
							description={item.description}
							type="small"
						/>
					</Grid>
				))}
			</CustomGrid>
		</CommunityContainer>
	);
};

export default CommunityTasks;
