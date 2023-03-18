import React from "react";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledIcon = styled(AccountCircleIcon)({
	fontSize: 67,
	color: "#666666",
});

const StyledSentButton = styled(SendIcon)({
	fontSize: 44,
	color: "#666666",
});

const SentButton = () => (
	<IconButton
		sx={{
			display: "flex",
			marginLeft: "13px",
			alignItems: "center",
		}}
	>
		<StyledSentButton />
	</IconButton>
);

const InputField = () => (
	<input
		className="chat-input"
		type="text"
		placeholder="Write a message"
		style={{ paddingLeft: "28px" }}
	/>
);

interface MessagesNumberProps {
	number: number;
}

const MessagesNumber = ({ number }: MessagesNumberProps) => (
	<div className="messages-new-notify">{number} new.</div>
);

interface MessageCardProps {
	icon: React.ReactElement<typeof AccountCircleIcon>;
	name: string;
	message: string;
}

const MessageCard = ({ icon, name, message }: MessageCardProps) => (
	<div className="messages-container-cards">
		<div className="message-card-inner-div">
			<div className="card-icon-div">{icon}</div>
			<div className="card-content-wrapper">
				<div className="card-name-div">{name}</div>
				<div className="card-content-div">{message}</div>
			</div>
		</div>
	</div>
);

const SelectedMessageCard = ({ icon, name, message }: MessageCardProps) => (
	<div className="selected-messages-container-cards">
		<div className="message-card-inner-div">
			<div className="card-icon-div">{icon}</div>
			<div className="card-content-wrapper">
				<div className="card-name-div">{name}</div>
				<div className="card-content-div">{message}</div>
			</div>
		</div>
	</div>
);

const Message = () => {
	const messageCards = [...Array(6)].map((_, index) => (
		<MessageCard
			key={index}
			icon={<StyledIcon />}
			name="Name"
			message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore "
		/>
	));

	return (
		<div>
			<div className="title-container">
				<h1 className="messages-title">Messages</h1>
				<MessagesNumber number={1} />
			</div>

			<div className="messages-container">
				<div className="messages-container-left">
					<SelectedMessageCard
						icon={<StyledIcon />}
						name="Name"
						message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore "
					/>

					{messageCards}
				</div>
				<div className="messages-container-right">
					<div className="chat-name-div">Name</div>
					<div
						className="chat-container"
						style={{ border: "1px solid black" }}
					></div>
					<div className="chat-input-div">
						<InputField />
						<SentButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
