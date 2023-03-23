import styled from "@emotion/styled";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddContainer from "./AddContainer";
interface Row {
	itemName: string;
	quantity: number;
	costEach: number;
	costTotal: number;
}

const RowTextField = styled(TextField)({
	border: "1px solid black",
	borderRadius: 8,
});

const BudgetGrid = styled(Grid)({
	marginBottom: 16,
});

const DeleteButton = styled(IconButton)({
	margin: "auto",
	marginLeft: 21,
});

const DeleteIcon = styled(CloseIcon)({
	color: "#666666",
});

const RowContainer = styled("div")({
	display: "flex",
	width: "110%",
});

const BudgetingGrid = () => {
	const [rows, setRows] = useState<Row[]>([
		{ itemName: "", quantity: 0, costEach: 0, costTotal: 0 },
		{ itemName: "", quantity: 0, costEach: 0, costTotal: 0 },
		{ itemName: "", quantity: 0, costEach: 0, costTotal: 0 },
	]);

	const handleAddRow = () => {
		setRows([
			...rows,
			{ itemName: "", quantity: 0, costEach: 0, costTotal: 0 },
		]);
	};

	const handleDeleteRow = (index: any) => {
		if (rows.length === 1) return;
		const newItems = [...rows];
		newItems.splice(index, 1);
		setRows(newItems);
	};

	const handleInputChange = (index: number, event: any) => {
		const { name, value } = event.target;
		const updatedRows = [...rows];
		updatedRows[index] = { ...updatedRows[index], [name]: value };
		setRows(updatedRows);
	};

	const [budgetTotal, setBudgetTotal] = useState<number>(0);

	const sumTotal = () => {
		const sum = rows.reduce((total, row) => total + row.costTotal, 0);
		console.log(sum);
		setBudgetTotal(sum);
	}; //------------------------STILL NEEDS TO BE IMPLEMENTED

	return (
		<div>
			<BudgetGrid container spacing={2}>
				<Grid item xs={6}>
					<Typography>Item name</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography>Quantity</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography>Cost (each)</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography>Cost (total)</Typography>
				</Grid>
			</BudgetGrid>
			{rows.map((row, index) => (
				<RowContainer key={index}>
					<BudgetGrid container spacing={2}>
						<Grid item xs={6}>
							<RowTextField
								required
								name="itemName"
								value={row.itemName}
								onChange={(event) => {
									handleInputChange(index, event);
									sumTotal();
								}}
								fullWidth
							/>
						</Grid>
						<Grid item xs={2}>
							<RowTextField
								type="number"
								required
								name="quantity"
								value={row.quantity}
								onChange={(event) => {
									handleInputChange(index, event);
									sumTotal();
								}}
								fullWidth
							/>
						</Grid>
						<Grid item xs={2}>
							<RowTextField
								required
								type="number"
								name="costEach"
								value={row.costEach}
								onChange={(event) => {
									handleInputChange(index, event);
									sumTotal();
								}}
								InputProps={{
									startAdornment: <>$</>,
								}}
								fullWidth
							/>
						</Grid>
						<Grid item xs={2}>
							<RowTextField
								disabled
								required
								type="number"
								name="costTotal"
								value={row.quantity * row.costEach}
								InputProps={{
									startAdornment: <>$</>,
								}}
								fullWidth
							/>
						</Grid>
					</BudgetGrid>
					<DeleteButton onClick={() => handleDeleteRow(index)}>
						<DeleteIcon />
					</DeleteButton>
				</RowContainer>
			))}
			<Grid container spacing={2}>
				<Grid item xs={9}>
					<AddContainer
						label="Add another item"
						onClick={handleAddRow}
					/>
				</Grid>
				<Grid
					item
					xs={3}
					style={{ display: "flex", alignItems: "center" }}
				>
					<Typography>Total cost</Typography>
					<RowTextField
						disabled
						type="number"
						name="total"
						value={budgetTotal}
						InputProps={{
							startAdornment: <>$</>,
						}}
						fullWidth
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default BudgetingGrid;
