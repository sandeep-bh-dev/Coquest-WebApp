import { Button, Container } from "@mui/material";
import React from "react";
import { useState } from "react";

// TODO
function changePage() {

}

function Orientation() {
    const [page, setPage] = useState(0);

    return (
        <Container>
            <h1>{page}</h1>
            <Button></Button>
        </Container>
    );
}

export default Orientation;
