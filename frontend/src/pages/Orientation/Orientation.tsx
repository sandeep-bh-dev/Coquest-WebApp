import { Button, Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import sanitizePage from "./utils";
import { Link } from "react-router-dom";

function Orientation() {
    const [hasError, setHasError] = useState(false);
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
                    setHasError(true);
                }
            }
        }


        handlePageId();
    }, [id, navigate]);

    if(hasError) {
        return (
            <Container>
                <h1>Oops, this page doesn&#39;t exist!</h1>
                <p>Did you mean to <Link to="/registration">register</Link>?</p>
            </Container>
        );
    } else {
        return (
            <Container>
                <h1>Step {page}</h1>
            </Container>
        );
    }
}

export default Orientation;
