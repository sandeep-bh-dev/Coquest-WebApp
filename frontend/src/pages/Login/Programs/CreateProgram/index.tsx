import React, { useState, useEffect } from "react";
import ProgramCreateProgress from "./ProgramCreateProgress";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { getValue } from "@testing-library/user-event/dist/utils";

export const CreateProgram = () => {
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		setCategories(["Option 1", "Option 2", "Option 3", "Option 4"]);
	}, []);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					minWidth: 300,
					width: "60vw",
					maxWidth: 700,
				}}
			>
				<ProgramCreateProgress />
				<Typography
					style={{
						marginTop: 45,
						fontWeight: 600,
						fontSize: 24,
						textAlign: "center",
					}}
				>
					Create a Program
				</Typography>
				<TextField
					variant="outlined"
					fullWidth
					label="Program name"
					placeholder="Name your program"
					InputLabelProps={{
						shrink: true,
						style: { color: "black" },
					}}
					InputProps={{
						inputMode: "text",
					}}
					style={{ marginTop: 31 }}
				/>

				<FormControl
					variant="outlined"
					fullWidth
					style={{ marginTop: 31 }}
				>
					<TextField
						select
						label="Program Type"
						style={{ color: "black" }}
						defaultValue="Select a category"
						InputLabelProps={{
							style: { color: "black" },
						}}
						InputProps={{
							inputMode: "text",
						}}
						// Must add placeholder here for "Select a category"
					>
						<MenuItem disabled value="">
							<em>Select a category</em>
						</MenuItem>
						{categories.map((category) => (
							<MenuItem key={category} value={category}>
								{category}
							</MenuItem>
						))}
					</TextField>

					<TextField
						label="Program description"
						placeholder="Create a description for your program"
						multiline
						rows={4}
						style={{ marginTop: 28 }}
						InputLabelProps={{
							shrink: true,
							style: { color: "black" },
						}}
						InputProps={{
							inputMode: "text",
						}}
					/>
					<TextField
						label="Program Objective"
						placeholder="State the goal for your program"
						multiline
						rows={4}
						style={{
							marginTop: 28,
						}}
						InputLabelProps={{
							shrink: true,
							style: { color: "black" },
						}}
						InputProps={{
							inputMode: "text",
						}}
					></TextField>

					<TextField
						fullWidth
						placeholder="Search hastags"
						InputLabelProps={{
							shrink: true,
							style: {
								color: "black",
							},
						}}
						InputProps={{
							inputMode: "text",
						}}
						style={{
							marginTop: 31,
							borderRadius: 28,
							border: "1px solid",
						}}
					/>
					<FormLabel
						id="initiative-radio-btn-group-label"
						style={{ marginTop: 24 }}
					>
						<Typography sx={{ color: "black" }}>
							Is this a initiative or charity program?
						</Typography>
					</FormLabel>
					<RadioGroup
						aria-labelledby="initiative-radio-btn-group-label"
						defaultValue="yes"
						name="initiative-radio-btn-group"
					>
						<FormControlLabel
							control={<Radio color="default" />}
							value="yes"
							label="Yes"
						/>
						<FormControlLabel
							control={<Radio color="default" />}
							value="no"
							label="No"
						/>
					</RadioGroup>

					<TextField
						label="Purpose for Initiative"
						placeholder="Why are you looking to achieve? Participants will be able to see your answer."
						multiline
						rows={4}
						style={{ marginTop: 28 }}
						InputLabelProps={{
							shrink: true,
							style: { color: "black" },
						}}
						InputProps={{
							inputMode: "text",
						}}
					/>

					<FormLabel
						id="participation-radio-btn-group-label"
						style={{ marginTop: 24 }}
					>
						<Typography sx={{ color: "black" }}>
							Who can participate in this program?
						</Typography>
					</FormLabel>
					<RadioGroup
						aria-labelledby="participation-radio-btn-group-label"
						defaultValue="public"
						name="participation-radio-btn-group"
					>
						<FormControlLabel
							control={<Radio color="default" />}
							value="public"
							label="Anyone (Public)"
						/>
						<FormControlLabel
							control={<Radio color="default" />}
							value="private"
							label="By invite only (Private)"
						/>
					</RadioGroup>

					<FormLabel
						id="experience-radio-btn-group-label"
						style={{ marginTop: 24 }}
					>
						<Typography sx={{ color: "black" }}>
							Do you have experience in this program?
						</Typography>
					</FormLabel>
					<RadioGroup
						aria-labelledby="experience-radio-btn-grou-label"
						defaultValue="yes"
						name="experience-radio-btn-group"
					>
						<FormControlLabel
							control={<Radio color="default" />}
							value="yes"
							label="Yes"
						/>
						<FormControlLabel
							control={<Radio color="default" />}
							value="no"
							label="No"
						/>
					</RadioGroup>
				</FormControl>
			</div>
		</div>
	);
};
