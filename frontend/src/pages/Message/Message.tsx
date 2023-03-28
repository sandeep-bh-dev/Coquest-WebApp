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
}

const MessageCard = ({ icon, name, message, onClick }: MessageCardProps) => (
	<div className="messages-container-cards" onClick={onClick}>
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
	const [selectedChat, setSelectedChat] = useState<number | null>(null);

	const handleChatSelection = (index: number) => {
		setSelectedChat(index);
	};

	const messageCards = mockMessages.map((chat, index) => (
		<MessageCard
			key={index}
			icon={<StyledIcon />}
			name={chat.name}
			message={chat.description}
			onClick={() => handleChatSelection(index)}
		/>
	));
	const renderMessages = () => {
		if (selectedChat !== null) {
			return mockMessageContents[selectedChat].map((message, index) => (
				<div
					key={index}
					className={`chat-content-container-${
						message.sentFrom === "zeeshanID"
							? "from-this-user"
							: "from-other-user"
					}`}
					style={{ border: "1px solid black" }}
				>
					<div className="message-icon-div">
						<StyledMessageIcon />
					</div>
					<div
						className={`chat-message-content-${
							message.sentFrom === "zeeshanID"
								? "from-this-user"
								: "from-other-user"
						}`}
						style={{ border: "1px solid black" }}
					>
						<div className="chat-message-content-inner">
							{message.message}
						</div>
					</div>
				</div>
			));
		}
		return <div>Select a chat to display messages</div>;
	};

	return (
		<div>
			<div className="title-container">
				<h1 className="messages-title">Messages</h1>
				<MessagesNumber number={1} />
			</div>

			<div className="messages-container">
				<div className="messages-container-left">{messageCards}</div>
				<div className="messages-container-right">
					<div className="chat-name-div">
						{selectedChat !== null
							? mockMessages[selectedChat].name
							: "No chat selected"}
					</div>
					<div
						className="chat-container"
						style={{ border: "1px solid black" }}
					>
						{renderMessages()}
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
