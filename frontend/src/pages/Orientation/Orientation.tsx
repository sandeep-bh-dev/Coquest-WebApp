import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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

    // Change the current page number to the parameter, page.
    // The function will adjust the value to the nearest page boundary if the value provided is out of bounds.
    function changePage(page: number) {
        const newPage = sanitizePage(page);
        changeSlug(newPage.toString());
        setPage(newPage);
    }

    useEffect(() => {
        const handlePageId = () => {
            let initialPage = 0;
            if (id) {
                const parsedId = +id;
                if (!isNaN(parsedId)) {
                    initialPage = parsedId;
                    changePage(initialPage);
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

                <IconButton title="Previous page" onClick={() => {
                    const newPage = page - 1;
                    changePage(newPage)
                    }}>
                    <ChevronLeft />

                </IconButton>
                <IconButton title="Next page" onClick={() => {
                    const newPage = page + 1;
                    changePage(newPage)
                    }}>
                    <ChevronRight />
                </IconButton>
            </Container>
        );
    }
}

export default Orientation;
