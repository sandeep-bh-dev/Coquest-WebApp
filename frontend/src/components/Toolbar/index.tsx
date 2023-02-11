import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar as MaterialToolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

import styled from "@emotion/styled";

type ProfileButtonProps = {
	name: string;
};

const Container = styled.div({
	width: "100%",
});

const Spacer = styled.div({
	width: 5,
});

const ProfileContainer = styled.div({
	display: "flex",
	marginRight: 30,
	gap: 10,
	paddingLeft: 25,
});

const ProfileIcon = styled(AccountCircleIcon)({
	color: "rgba(0, 0, 0, 0.54)",
});

const ProfileButton = ({ name }: ProfileButtonProps) => (
	<ProfileContainer>
		<ProfileIcon />
		<Typography>{name}</Typography>
	</ProfileContainer>
);

const Toolbar = () => (
	<Container>
		<AppBar>
			<MaterialToolbar>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<Spacer />
				<IconButton>
					<MessageIcon />
				</IconButton>

				<ProfileButton name="John Doe" />
			</MaterialToolbar>
		</AppBar>
	</Container>
);

export default Toolbar;
