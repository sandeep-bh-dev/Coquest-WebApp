import { Button, Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import sanitizePage from "./utils";

function Orientation() {
    const { id } = useParams();
    const [page, setPage] = useState(0);
    let navigate = useNavigate();

    // Alter variadic portion of the URL to the parameter, newSlug.
    function changeSlug(newSlug: string) {
        navigate(`/registration/${newSlug}`);
    }

    useEffect(() => {
        const handlePageId = () => {
            let initialPage = 0;
            if (id) {
                const parsedId = +id;
                if (!isNaN(parsedId)) {
                    initialPage = parsedId;
                    const sanitized = sanitizePage(initialPage);
                    if(initialPage !== sanitized) {
                        initialPage = sanitized;
                        changeSlug(sanitized.toString());
                    } else {
                        setPage(initialPage);
                    }
                } else {
                    // TODO: Issue an inline 404 error
                }
            }
        }


        handlePageId();
    }, [id, navigate]);

    return (
        <Container>
            <h1>Step {page}</h1>
        </Container>
    );
}

export default Orientation;
