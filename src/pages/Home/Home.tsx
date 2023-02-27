import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchInput from "../../views/components/SearchInput";
import Copyright from "../../views/components/Copyright";
import Container from "@mui/material/Container";
import {useTheme} from "../../hooks";
import {Header} from "../../views/components/Header";
import {ThemeSelectorButtons} from "../../views/components/ThemeSelector";
import {ButtonLists} from "../../views/components/ButtonLists";

const Home: () => JSX.Element = () => {
    const {isDark, handleThemeChange} = useTheme();

    return (
        <Container component="main" maxWidth="sm" sx={{
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <CssBaseline/>
                <Header/>
                <Box sx={{mt: 2}}>
                    <SearchInput/>
                </Box>
            <Grid container spacing={2} mt={1} sx={{
                justifyContent: 'center',
            }}>
                <ThemeSelectorButtons dark={isDark} onChange={handleThemeChange}/>
                <ButtonLists/>
            </Grid>
            <Copyright/>
        </Container>
    )
}

export default Home