import React, { useState } from "react";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const mockMessages = [
	{
		id: "chatID1",
		members: ["zeeshanID", "zeeshanID1"],
		name: "Chat 1",
		description: "Chat 1 description",
	},
	{
		id: "chatID2",
		members: ["zeeshanID", "zeeshanID1"],
		name: "Chat 2",
		description: "Chat 2 description",
	},
	{
		id: "chatID3",
		members: ["zeeshanID", "zeeshanID1"],
		name: "Chat 3",
		description: "Chat 3 description",
	},
];
const mockMessageContents = [
	[
		{
			sentFrom: "zeeshanID",
			message: "my first message",
			time: "3/24/2023, 7:32:31 PM",
			unreadBy: {
				zeeshanID: 0,
				zeeshanID1: 1,
			},
		},
		// ... more messages for chatID1 ...
	],
	[
		{
			sentFrom: "zeeshanID",
			message: "my 2nd message",
			time: "3/24/2023, 7:37:51 PM",
			unreadBy: {
				zeeshanID: 1,
				zeeshanID1: 0,
			},
		},
		// ... more messages for chatID2 ...
		{
			sentFrom: "zeeshanID",
			message: "my 2nd message",
			time: "3/24/2023, 7:37:51 PM",
			unreadBy: {
				zeeshanID: 1,
				zeeshanID1: 0,
			},
		},
		{
			sentFrom: "zeeshanID",
			message: "my 2nd message",
			time: "3/24/2023, 7:37:51 PM",
			unreadBy: {
				zeeshanID: 0,
				zeeshanID1: 1,
			},
		},
		// ... more messages for chatID2 ...
	],
	[
		{
			sentFrom: "zeeshanID",
			message: "my 3rd message",
			time: "3/24/2023, 7:37:51 PM",
			unreadBy: {
				zeeshanID: 1,
				zeeshanID1: 1,
			},
		},
		{
			sentFrom: "zeeshanID",
			message: "my 3rd message",
			time: "3/24/2023, 7:37:51 PM",
			unreadBy: {
				zeeshanID: 0,
				zeeshanID1: 1,
			},
		},
	],
	// ... more message content arrays for other chats ...
];

const StyledIcon = styled(AccountCircleIcon)({
	fontSize: 67,
	color: "#666666",
});

const StyledMessageIcon = styled(AccountCircleIcon)({
	fontSize: 48,
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
	onClick: () => void;
	selected: boolean;
}

const MessageCard = ({
	icon,
	name,
	message,
	onClick,
	selected,
}: MessageCardProps) => (
	<div onClick={onClick}>
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
	const [selectedMessage, setSelectedMessage] = useState(0);
	const [selectedMessageContent, setSelectedMessageContent] = useState<
		{ sentFrom: string; message: string; time: string }[]
	>(mockMessageContents[0]);

	const messageCards = mockMessages.map((card, index) => (
		<MessageCard
			key={index}
			icon={<StyledIcon />}
			name={card.name}
			message={card.description}
			onClick={() => {
				setSelectedMessage(index);
				// Replace the following line with the actual API call to fetch messages for the selected card
				setSelectedMessageContent(mockMessageContents[index]);
			}}
			selected={selectedMessage === index}
		/>
	));

	const currentUserId = "messagetest1"; // Replace this with the actual user ID of the current user
	const chatContent = selectedMessageContent.map((message, index) => {
		const isFromCurrentUser = message.sentFrom === currentUserId;

		return (
			<div
				key={index}
				className={`chat-content-container-${
					isFromCurrentUser ? "from-this-user" : "from-other-user"
				}`}
			>
				{isFromCurrentUser ? (
					<>
						<div className="chat-message-content-from-this-user">
							<div className="chat-message-content-inner">
								{message.message}
							</div>
						</div>
						<div className="message-icon-div">
							<StyledMessageIcon />
						</div>
					</>
				) : (
					<>
						<div className="message-icon-div">
							<StyledMessageIcon />
						</div>
						<div className="chat-message-content-from-other-user">
							<div className="chat-message-content-inner">
								{message.message}
							</div>
						</div>
					</>
				)}
			</div>
		);
	});

	return (
		<div className="message">
			<div className="title-container">
				<h1 className="messages-title">Messages</h1>
				<p className="messages-new-notify">3 new</p>
			</div>
			<div className="messages-container">
				<div className="messages-container-left">{messageCards}</div>
				<div className="messages-container-right">
					<div className="chat-name-div">Name</div>
					<div
						className="chat-container"
						style={{ border: "1px solid black" }}
					>
						{chatContent}
					</div>
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
