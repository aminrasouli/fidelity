import Copyright from "../../views/components/Copyright";
import Container from "@mui/material/Container";
import {Header} from "../../views/components/Header";
import React from "react";
import Table from "../../views/components/Table";
import {ButtonLists} from "../../views/components/ButtonLists";
import Box from "@mui/material/Box";

const Search: () => JSX.Element = () => {
    return (
        <>
            <Container maxWidth="lg" component="main" sx={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>

                <Header/>
                <Box mb={3}>
                    <ButtonLists showBackButton/>
                </Box>
                <Table/>
                <Copyright/>
            </Container>
        </>
    )
}

export default Search