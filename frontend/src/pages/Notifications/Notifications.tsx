import React from "react";
import "./style.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const StyledBox = styled(Box)({
	display: "flex",
	flexWrap: "wrap",
	"& > :not(style)": {
		m: 1,
		width: 699,
		height: 722,
	},
	borderRadius: 10,
});
const StyledButton = styled(Button)({
	width: 91.49,
	height: 40,
	marginTop: 66,
	marginLeft: 566.5,
	backgroundColor: "#D9D9D9",
	borderRadius: 20,
	color: "black",
	fontSize: 16,
	fontWeight: 600,
	lineHeight: 24,
});
const StyledArrowIcon = styled(KeyboardArrowRightIcon)({
	marginRight: 20,
});

interface NotificationsProps {
	title: string;
}

interface NewNotificationsNumberProps {
	number: number;
}

interface NotificationsImageProps {
	image?: string;
}

interface NotificationsContentProps {
	content: string;
}

const NewNotificationsNumber: React.FC<NewNotificationsNumberProps> = ({
	number,
}) => {
	return <div className="notifications-new-notify">{number} new.</div>;
};

const NewNotificationsCard: React.FC<NotificationsProps> = ({ title }) => {
	return (
		<div className="display-new-notifications-title">
			{title}
			<StyledArrowIcon />
		</div>
	);
};

const OldNotificationsCard: React.FC<NotificationsProps> = ({ title }) => {
	return (
		<div className="display-notifications-title">
			{title}
			<StyledArrowIcon />
		</div>
	);
};

const NotificationsImage: React.FC<NotificationsImageProps> = ({ image }) => {
	return (
		<div className="notifications-container-right-image-holder">
			{image && <img src={image} alt="notifications-content-img" />}
		</div>
	);
};

const NotificationsContent: React.FC<NotificationsContentProps> = ({
	content,
}) => {
	return (
		<div className="notifications-container-right-contain">{content}</div>
	);
};

const Notifications: React.FC = () => {
	return (
		<div>
			<div className="title-container">
				<h1 className="notifications-title">Notifications</h1>
				<NewNotificationsNumber number={1} />
			</div>

			<div className="notifications-container">
				<div className="notifications-container-left">
					<NewNotificationsCard title="New Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
					<OldNotificationsCard title="Notification from" />
				</div>

				<StyledBox className="notifications-container-right">
					<Paper elevation={3}>
						<NotificationsImage />
						<NotificationsContent
							content="Description. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna
								aliqua. Congue eu consequat ac felis donec et
								odio. Posuere lorem ipsum dolor sit amet
								consectetur adipiscing elit. Tortor aliquam
								nulla facilisi cras fermentum odio eu feugiat
								pretium. Diam phasellus vestibulum lorem sed.
								Tortor vitae purus faucibus ornare. Arcu non
								odio euismod lacinia at quis risus. A diam
								maecenas sed enim ut sem. Pharetra vel turpis
								nunc eget. Tellus elementum sagittis vitae et
								leo. Adipiscing vitae proin sagittis nisl
								rhoncus mattis rhoncus. Turpis egestas pretium
								aenean pharetra magna ac placerat."
						/>

						<StyledButton>More</StyledButton>
					</Paper>
				</StyledBox>
			</div>
		</div>
	);
};

export default Notifications;
