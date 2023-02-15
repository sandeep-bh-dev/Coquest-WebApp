import React from "react";
import "./style.css";

type MessagesNumberProps = {
	number: number;
};

const MessagesNumber = ({ number }: MessagesNumberProps) => {
	return <div className="messages-new-notify">{number} new.</div>;
};

const Message = () => {
	return (
		<div>
			<div className="title-container">
				<h1 className="messages-title">Messages</h1>
				<MessagesNumber number={1} />
			</div>
		</div>
	);
};

export default Message;
