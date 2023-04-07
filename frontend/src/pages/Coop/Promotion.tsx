import react, { useRef } from "react";
import NextandBackButton from "../../components/NextandBackButton";
import ProgressBar from "../../components/ProgressBar";
import Header from "../../components/CoopTemplate/Header";
import Page from "../../components/CoopTemplate/Page";
import Form from "../../components/CoopTemplate/Form";
import {
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Skeleton,
    TextField,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CopyTextButton from "../../components/Sharelink";
import CopyTextFieldButton from "../../components/Sharelink";
import Sharelink from "../../components/Sharelink";

const Map = () => {
    const MapContainer = styled.div({
        display: "flex",
        justifyContent: "center",
    });

    return (
        <>
            <Typography variant="body2">
                Set the promotion area of the project
            </Typography>
            <MapContainer>
                <Skeleton variant="rectangular" width={"80%"} height={500}>
                    Map is Loading...
                </Skeleton>
            </MapContainer>
        </>
    );
};

const Partnership = () => {
    const Container = styled(FormGroup)({
        gap: 20,
    });

    return (
        <Container>
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        size="small"
                        color="default"
                    />
                }
                label="Material"
            />
            <TextField
                label="Materials and equipment"
                placeholder="What kind of help do you need?"
                fullWidth
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
                label="Services"
            />
            <TextField
                label="Services"
                placeholder="What kind of help do you need?"
                fullWidth
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
                label="Operations"
            />
            <TextField
                label="Operations"
                placeholder="What kind of help do you need?"
                fullWidth
            />
        </Container>
    );
};

const InviteAndShare = () => {
    return (
        <>
            <Typography>
                <b>Invite and Share</b>
            </Typography>
            <Sharelink />
            <FormControl>
                <InputLabel>Invite people</InputLabel>
                <Select id="outlined" label="invite people">
                    <MenuItem value={"input"}>Input</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};
function Promotion() {
    return (
        <>
            <ProgressBar page={4} />
            <NextandBackButton next="" back="/Coop/Budgeting" />
            <Page>
                <Form>
                    <Header text="Promotion" />
                    <Map />
                    <Partnership />
                    <InviteAndShare />
                </Form>
            </Page>
        </>
    );
}

export default Promotion;
