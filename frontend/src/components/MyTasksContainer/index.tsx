import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Card, { CardProps } from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { relative } from "path";
import Link from "@mui/material/Link";
import TaskCard from "../../pages/Coop/CoopComponents/TaskCard";

//props for task label and link to task page
type MyTasksContainerProps = {
	label: string;
	seeAllLink: string;
};

//array of task contents

let taskContents: any[] = [
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

const SeeAllLink = styled(Typography)({
	fontWeight: 400,
	fontSize: "12px",
	lineHeight: "18px",
	color: "#000000",
});

const Label = styled(Typography)({
	fontWeight: 600,
	fontSize: 16,
	color: "#000000",
	lineHeight: "24px",
});

const LabelContainer = styled.div({
	width: "80px",
	height: "24px",
	bottom: "1193px",
	left: "0px",
	position: "relative",
});

//maps through data to display on each task card
//places the link in upper right hand corner
const MyTasksContainer = ({ label, seeAllLink }: MyTasksContainerProps) => {
	return (
		<div
			style={{
				backgroundColor: "#F3F3F3",
				width: "304px",
				height: "655px",
				borderRadius: "10px",
			}}
		>
			<div
				style={{
					left: "35px",
					bottom: "570px",
					position: "relative",
				}}
			>
				<>
					{taskContents.map((item) => {
						return (
							<TaskCard
								name={item.taskName}
								community={item.communityName}
								location={item.location}
								description={item.description}
								type="large"
								style={{
									marginBottom: "14px",
								}}
							/>
						);
					})}
				</>
			</div>
			<div
				style={{
					position: "relative",
					left: "25px",
					top: "5px",
				}}
			>
				<LabelContainer>
					<Label>{label}</Label>
				</LabelContainer>
			</div>
			<SeeAllLink
				style={{
					position: "relative",
					bottom: "1208px",
					left: "245px",
				}}
			>
				<Link href={seeAllLink} color="#000000">
					See all
				</Link>
			</SeeAllLink>
		</div>
	);
};

export default MyTasksContainer;
