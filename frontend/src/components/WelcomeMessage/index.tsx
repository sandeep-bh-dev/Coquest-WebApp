import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

//takes props for users name and community name
type WelcomeMessageProps = {
	name: string;
	communityName: string;
};

const Name = styled(Typography)({
	fontWeight: 400,
	fontSize: "20px",
	color: "#000000",
	lineHeight: "50px",
});

const CommunityName = styled(Typography)({
	fontWeight: 500,
	fontSize: "20px",
	color: "#000000",
	lineHeight: "30px",
});

const Header = styled(Typography)({
	fontWeight: 600,
	fontSize: "36px",
	color: "#000000",
	lineHeight: "54px",
});

//displays message on screen
const WelcomeMessage = ({ name, communityName }: WelcomeMessageProps) => {
	return (
		<div>
			<div>
				<Name>Welcome, {name}</Name>
			</div>
			<div>
				{
					<Header
						style={{
							position: "relative",
							top: "-5px",
						}}
					>
						Overview.
					</Header>
				}

				{<CommunityName>{communityName}</CommunityName>}
			</div>
		</div>
	);
};

export default WelcomeMessage;
