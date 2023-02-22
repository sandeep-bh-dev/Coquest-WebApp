import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TaskCard from "../TaskCard";
import Grid from "@mui/material/Grid";

const Header = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#0000000",
});

const CommunityContainer = styled.div({
  width: "638px",
  height: "329px",
  borderRadius: "10px",
  backgroundColor: "#D9D9D9",
});

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
    <CommunityContainer>
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
        <>
          <Grid container rowSpacing={2}>
            {taskContents.map((item) => {
              return (
                <Grid item xs={4} md={8}>
                  <TaskCard
                    name={item.taskName}
                    community={item.communityName}
                    location={item.location}
                    description={item.description}
                    type="small"
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      </div>
    </CommunityContainer>
  );
};

/* const CommunityTasks = () => {
  return (
    <CommunityContainer>
      <Header
        style={{
          position: "relative",
          left: "30px",
          top: "25px",
        }}
      >
        All community tasks
      </Header>

      <Stack
        spacing={1.7}
        style={{
          position: "relative",
          left: "30px",
          top: "40px",
        }}
      >
        <TaskCard
          name="Task name"
          community="Community name"
          location="Location"
          description="Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
          type="small"
        />
        <TaskCard
          name="Task name"
          community="Community name"
          location="Location"
          description="Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
          type="small"
        />
      </Stack>
      <Stack
        spacing={1.7}
        style={{
          position: "relative",
          left: "210px",
          bottom: "181px",
        }}
      >
        <TaskCard
          name="Task name"
          community="Community name"
          location="Location"
          description="Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
          type="small"
        />
        <TaskCard
          name="Task name"
          community="Community name"
          location="Location"
          description="Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
          type="small"
        />
      </Stack>
      <Stack
        spacing={1.7}
        style={{
          position: "relative",
          left: "390px",
          bottom: "401px",
        }}
      >
        <TaskCard
          name="Task name"
          community="Community name"
          location="Location"
          description="Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
          type="small"
        />
        <TaskCard
          name="Task name"
          community="Community name"
          location="Location"
          description="Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
          type="small"
        />
      </Stack>
    </CommunityContainer>
  );
}; */

export default CommunityTasks;
