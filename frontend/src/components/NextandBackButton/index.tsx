import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const NextandBackButton = () => {
    const Container = styled.div({
        display: "flex",
        justifyContent: "end",
        gap: 30,
        marginRight: 70,
    });
    return (
        <Container>
            <Button
                style={{
                    color: "black",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: 16,
                    borderRadius: 30,
                    width: 80,
                }}
            >
                {"<"} Back
            </Button>
            <Button
                variant="contained"
                disableElevation
                style={{
                    backgroundColor: "rgb(217, 217, 217)",
                    color: "black",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: 16,
                    borderRadius: 30,
                    width: 80,
                }}
            >
                Next
            </Button>
        </Container>
    );
};

export default NextandBackButton;
