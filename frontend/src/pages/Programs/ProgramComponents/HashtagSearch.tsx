import React, { useState } from "react";
import { InputBase, Button } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const SearchBarContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	marginTop: 31,
	"& button:hover": {
		backgroundColor: "#DDDDDD",
	},
});

const SearchInputContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	border: "1px solid black",
	borderRadius: 28,
});

const SearchIconWrapper = styled("div")({
	margin: 8,
	fontSize: 12,
	color: "#666666",
});

const HashtagContainer = styled("div")({
	display: "flexWrap",
	height: 43,
	overflowY: "scroll",
	marginTop: 10,
	"::-webkit-scrollbar": {
		display: "none",
	},
});

const HashtagButton = styled(Button)({
	margin: 5,
	backgroundColor: "#F0F0F0",
	borderRadius: 8,
	color: "black",
	textTransform: "none",
});

const SelectedHashtagButton = styled(Button)({
	margin: 5,
	marginLeft: 5,
	backgroundColor: "#F0F0F0",
	borderRadius: 8,
	color: "black",
	textTransform: "none",
});

const HashtagSearch = (props: { hashtags: string[] }) => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);

	const handleSearchInputChange = (event: any) => {
		setSearchValue(event.target.value);
	};

	const handleHashtagClick = (hashtag: string) => {
		if (!selectedHashtags.includes(hashtag)) {
			setSelectedHashtags([...selectedHashtags, hashtag]);
		}
	};

	const handleSelectedHashtagClick = (hashtag: string) => {
		setSelectedHashtags(
			selectedHashtags.filter(
				(selectedHashtag) => selectedHashtag !== hashtag
			)
		);
	};

	const renderHashtagButtons = () => {
		return props.hashtags
			.filter(
				(hashtag) =>
					hashtag.toLowerCase().includes(searchValue) &&
					!selectedHashtags.includes(hashtag)
			)
			.map((hashtag) => (
				<HashtagButton
					key={hashtag}
					variant="contained"
					onClick={() => handleHashtagClick(hashtag)}
				>
					{hashtag}
				</HashtagButton>
			));
	};

	const renderSelectedHashtags = () => {
		return (
			<div style={{ display: "flex", flexDirection: "row-reverse" }}>
				{selectedHashtags.map((hashtag) => (
					<SelectedHashtagButton
						key={hashtag}
						variant="contained"
						onClick={() => handleSelectedHashtagClick(hashtag)}
					>
						{hashtag}
						<span>&nbsp;&times;</span>
					</SelectedHashtagButton>
				))}
			</div>
		);
	};

	return (
		<SearchBarContainer>
			<SearchInputContainer>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<InputBase
					placeholder="Search hashtags"
					className="placeholder-mod"
					style={{ width: "90%" }}
					value={searchValue}
					onChange={handleSearchInputChange}
					inputProps={{ "aria-label": "search" }}
				/>
				<div>{renderSelectedHashtags()}</div>
			</SearchInputContainer>
			<HashtagContainer>{renderHashtagButtons()}</HashtagContainer>
		</SearchBarContainer>
	);
};

HashtagSearch.propTypes = {
	hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HashtagSearch;
