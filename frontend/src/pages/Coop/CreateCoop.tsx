import styled from "@emotion/styled";
import {
    Checkbox,
    Chip,
    FormControlLabel,
    FormGroup,
    ListItem,
    MenuItem,
    Radio,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckIcon from "@mui/icons-material/Check";

type TextProps = {
    text: string;
};

const Header = ({ text }: TextProps) => (
    <Typography fontSize={30} fontWeight={600} lineHeight={1.5} variant="h1">
        {text}
    </Typography>
);

const categories = [
    {
        label: "Community Gardens - Food and Agriculture",
    },
    {
        label: "Food Processing Co-ops - Food and Agriculture",
    },
    {
        label: "(Raw and Processed) Food Delivery System - Agriculture",
    },
    {
        label: "Green Powered Micro-Grids - Energy",
    },
    {
        label: "Goods and Craft collectives - Community Art ",
    },
];

const Page = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    // border: "1px solid",
});

const Form = styled.div({
    // border: "1px solid",
    display: "flex",
    alignItem: "start",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    width: 700,
});

function Categories() {
    return (
        <TextField
            select
            label="Select a category"
            style={{
                width: 500,
            }}
        >
            {categories.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

function Summary() {
    return <TextField label="Co-op Summary" multiline rows={4} fullWidth />;
}

function Mission() {
    return <TextField label="Mission" multiline rows={5} fullWidth />;
}

function Hashtags() {
    // interface ChipData {
    //     key: number;
    //     label: string;
    // }

    const [chipData, setChipData] = useState([
        { key: 0, label: "communitygarden", active: false },
        { key: 1, label: "hashtag", active: false },
        { key: 2, label: "hashtag", active: false },
        { key: 3, label: "hashtag", active: false },
        { key: 4, label: "hashtag", active: false },
        { key: 5, label: "hashtag", active: false },
    ]);

    const onDelete = (chipToDelete: { key: any; label?: string }) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        );
    };

    // const onClick = (ChipActive: {label?: string; active: any}) => () =>{
    //     label = "clicked"
    // }

    return (
        <div>
            <TextField label="Hashtags" fullWidth />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid",
                    alignItems: "start",
                    flexDirection: "column",
                }}
            >
                {chipData.map((data) => {
                    return (
                        <ListItem key={data.key}>
                            <Chip
                                label={data.label}
                                onDelete={onDelete(data)}
                            ></Chip>
                        </ListItem>
                    );
                })}
            </div>
        </div>
    );
}

function CheckBox() {
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        size="small"
                        color="default"
                    />
                }
                label="Allow for location information"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        size="small"
                        color="default"
                    />
                }
                label="Notification ON/OFF"
            />
        </FormGroup>
    );
}

function CreateCoop() {
    return (
        <Page>
            <Form>
                <Header text="Create co-op"></Header>
                <TextField label="Co-op name" />
                <Categories />
                <Summary />
                <Mission />
                <Hashtags />
                <CheckBox />
            </Form>
        </Page>
    );
}

export default CreateCoop;
