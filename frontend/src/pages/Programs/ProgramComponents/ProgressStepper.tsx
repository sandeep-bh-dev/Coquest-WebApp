import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const steps = ["Basic Information", "Operations", "Budgeting", "Promotion"];

const stepTheme = createTheme({
	components: {
		MuiStepLabel: {
			styleOverrides: {
				active: {
					color: "#4285F4",
				},
				completed: {
					color: "white",
				},
			},
		},
		MuiStepIcon: {
			styleOverrides: {
				root: {
					color: "#666666",
				},
				active: {
					color: "#4285F4",
				},
				completed: {
					color: "#4285F4",
				},
			},
		},
	},
});

function ProgressStepper(props: { pgnum: number }) {
	const [activeStep, setActiveStep] = React.useState(props.pgnum);

	useEffect(() => {
		setActiveStep(props.pgnum);
	}, [props.pgnum]);

	return (
		<Box sx={{ width: "100%" }}>
			<ThemeProvider theme={stepTheme}>
				<Stepper
					sx={{ "& .MuiStepIcon-root": { color: "#666666" } }}
					activeStep={activeStep}
				>
					{steps.map((label, index) => {
						const stepProps: { completed?: boolean } = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
			</ThemeProvider>
		</Box>
	);
}

export default ProgressStepper;
