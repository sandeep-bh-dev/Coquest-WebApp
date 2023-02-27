import React from "react";
import NextandBackButton from "../../components/NextandBackButton";
import ProgressBar from "../../components/ProgressBar";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { maxHeight, maxWidth } from "@mui/system";

const Page = styled.div({
    display: "flex",
    justifyContent: "center",
    marginBottom: 100,
    // border: "1px solid",
});

const Form = styled.div({
    // border: "1px solid",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: 700,
    // justifyContent: "center",
    // alignItems: "center",
    // border: "1px solid",
});

const TimeDateLocation = () => {
    const DropDown = styled(FormControl)({
        width: 220,
    });
    const Container = styled.div({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 15,
        // border: "1px solid",
    });

    const DropDownCont = styled.div({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 25,
        // border: "1px solid",
    });

    const RadioContainer = styled.div({
        // border: "1px solid",
        width: 465,
    });

    const RadioMargin = styled(FormControlLabel)({
        display: "flex",
        marginLeft: 5,
        height: 30,
        // border: "1px solid",
    });
    return (
        <>
            <Typography>
                <b>Time, date and location</b>
            </Typography>
            <Container>
                <DropDownCont>
                    <DropDown>
                        <InputLabel>Start date</InputLabel>
                        <Select
                            startAdornment={
                                <InputAdornment position="start">
                                    <EventIcon />
                                </InputAdornment>
                            }
                            id="outlined"
                            label="Start date"
                        >
                            <MenuItem value={"Jan"}>Jan</MenuItem>
                            <MenuItem value={"Sept"}>Sept</MenuItem>
                            <MenuItem value={"Dec"}>Dec</MenuItem>
                        </Select>
                    </DropDown>
                    <DropDown>
                        <InputLabel>End date</InputLabel>
                        <Select
                            startAdornment={
                                <InputAdornment position="start">
                                    <EventIcon />
                                </InputAdornment>
                            }
                            id="outlined"
                            label="End date"
                        >
                            <MenuItem value={"Jan"}>Jan</MenuItem>
                            <MenuItem value={"Sept"}>Sept</MenuItem>
                            <MenuItem value={"Dec"}>Dec</MenuItem>
                        </Select>
                    </DropDown>
                    <DropDown>
                        <InputLabel>Start date</InputLabel>
                        <Select
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccessTimeIcon />
                                </InputAdornment>
                            }
                            id="outlined"
                            label="Start time"
                        >
                            <MenuItem value={"Jan"}>Jan</MenuItem>
                            <MenuItem value={"Sept"}>Sept</MenuItem>
                            <MenuItem value={"Dec"}>Dec</MenuItem>
                        </Select>
                    </DropDown>
                    <DropDown>
                        <InputLabel>End time</InputLabel>
                        <Select
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccessTimeIcon />
                                </InputAdornment>
                            }
                            id="outlined"
                            label="End time"
                        >
                            <MenuItem value={"Jan"}>Jan</MenuItem>
                            <MenuItem value={"Sept"}>Sept</MenuItem>
                            <MenuItem value={"Dec"}>Dec</MenuItem>
                        </Select>
                    </DropDown>
                </DropDownCont>
                <RadioContainer>
                    <FormControl>
                        <Typography>Recurring:</Typography>
                        <RadioGroup>
                            <RadioMargin
                                value="daily"
                                control={<Radio size="small" color="default" />}
                                label="Daily"
                            />
                            <RadioMargin
                                value="weekly"
                                control={<Radio size="small" color="default" />}
                                label="Weekly"
                            />
                            <RadioMargin
                                value="monthly"
                                control={<Radio size="small" color="default" />}
                                label="Monthly"
                            />
                            <RadioMargin
                                value="custom"
                                control={<Radio size="small" color="default" />}
                                label="Custom"
                            />
                        </RadioGroup>
                    </FormControl>
                </RadioContainer>
            </Container>
        </>
    );
};

const SelectCoop = () => {
    const Container = styled.div({
        display: "flex",
        flexDirection: "column",
        gap: 15,
    });

    const Cont = styled.div({
        display: "flex",
        justifyContent: "space-between",
    });

    const SearchBox = styled(TextField)(() => ({
        "& fieldset": {
            borderRadius: "25px",
            width: 550,
        },
    }));

    const DropDown = styled(FormControl)({
        width: 120,
    });

    return (
        <Container>
            <Typography variant="body2">Select Co-op locations:</Typography>
            <Cont>
                <SearchBox
                    placeholder="Search location"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <DropDown fullWidth>
                    <InputLabel>Radius</InputLabel>
                    <Select
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        id="outlined"
                        label="Radius"
                    >
                        <MenuItem value={"20 km"}>20 km</MenuItem>
                        <MenuItem value={"50 km"}>50 km</MenuItem>
                        <MenuItem value={"100 km"}>100 km</MenuItem>
                    </Select>
                </DropDown>
            </Cont>
        </Container>
    );
};

function Operations() {
    return (
        <>
            <ProgressBar />
            <NextandBackButton next="" back="/Coop/CreateCoop" />
            <Page>
                <Form>
                    <Header text="Operations" />
                    <TimeDateLocation />
                    <SelectCoop />
                </Form>
            </Page>
        </>
    );
}

export default Operations;
