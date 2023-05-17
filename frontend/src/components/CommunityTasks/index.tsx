// import React from "react";
// import styled from "@emotion/styled";
// import { Typography } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
// import TaskCard from "../../pages/Coop/CoopComponents/TaskCard";

// //text header for card
// const Header = styled(Typography)({
// 	fontWeight: 600,
// 	fontSize: "16px",
// 	lineHeight: "24px",
// 	color: "#0000000",
// });

// //container card that holds all information
// const CommunityContainer = styled.div({
// 	width: "638px",
// 	height: "329px",
// 	borderRadius: "10px",
// 	backgroundColor: "#D9D9D9",
// });

// //array of data
// let taskContents: any[] = [
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	},
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	},
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	},
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	},
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	},
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	},
// 	{
// 		taskName: "Task Name",
// 		communityName: "Community name",
// 		loction: "Location",
// 		description:
// 			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
// 	}
// ];

// const SeeAllLink = styled(Typography)({
// 	fontWeight: 400,
// 	fontSize: "12px",
// 	lineHeight: "18px",
// 	color: "#000000",
// });

// const Label = styled(Typography)({
// 	fontWeight: 600,
// 	fontSize: 16,
// 	color: "#000000",
// 	lineHeight: "24px",
// });

// const LabelContainer = styled.div({
// 	width: "80px",
// 	height: "24px",
// 	bottom: "1193px",
// 	left: "0px",
// 	position: "relative",
// });

// const CommunityTasks = () => {
// 	return (
// 		<CommunityContainer>
// 			<Header
// 				style={{
// 					position: "relative",
// 					left: "30px",
// 					top: "25px",
// 				}}
// 			>
// 				All community tasks
// 			</Header>
// 			<div
// 				style={{
// 					position: "relative",
// 					left: "30px",
// 					top: "40.5px",
// 				}}
// 			>
// 				<>
// 					<Grid container spacing={2}>
// 						{taskContents.map((item, index) => (
// 							<Grid item key={index} xs={12} md={6} lg={4}>
// 							<TaskCard
// 								name={item.taskName}
// 								community={item.communityName}
// 								location={item.loction}
// 								description={item.description}
// 								type="small"
// 							/>
// 							</Grid>
// 						))}
// 					</Grid>

// 				</>
// 			</div>
// 		</CommunityContainer>
// 	);
// };
// //using grid to map contents onto the community container card

// export default CommunityTasks;








import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TaskCard from "../../pages/Coop/CoopComponents/TaskCard";

const Header = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#0000000",
});

const CommunityContainer = styled.div(({ contentLength }: { contentLength: number }) => ({
  width: "638px",
  height: `${Math.ceil(contentLength / 3) * 125 + 49}px`, 
  borderRadius: "10px",
  backgroundColor: "#D9D9D9",
}));

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
	},{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},{
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

const CommunityTasks = () => {
  return (
    <CommunityContainer contentLength={taskContents.length}>
      <Header
        style={{
          position: "relative",
          left: "30px",
          top: "25px",
        }}
      >
        All community tasks
      </Header>
      <div
        style={{
          position: "relative",
          left: "30px",
          top: "40.5px",
        }}
      >
        <Grid container spacing={2}>
          {taskContents.map((item, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <TaskCard
                name={item.taskName}
                community={item.communityName}
                location={item.loction}
                description={item.description}
                type="small"
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </CommunityContainer>
  );
};

export default CommunityTasks;

