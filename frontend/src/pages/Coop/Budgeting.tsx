import styled from "@emotion/styled";
import react from "react";
import Form from "../../components/CoopTemplate/Form";
import Header from "../../components/CoopTemplate/Header";
import Page from "../../components/CoopTemplate/Page";
import NextandBackButton from "../../components/NextandBackButton";
import ProgressBar from "../../components/ProgressBar";

function Budgeting() {
    return (
        <>
            <ProgressBar page={3} />
            <NextandBackButton next="" back="/Coop/Operations" />
            <Page>
                <Form>
                    <Header text="Budgeting" />
                </Form>
            </Page>
        </>
    );
}

export default Budgeting;
