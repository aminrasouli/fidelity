import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Search from "../../views/components/Search";
import Copyright from "../../views/components/Copyright";
import Container from "@mui/material/Container";
import {useTheme} from "../../hooks";
import {Header} from "../../views/components/Header";
import {ThemeSelectorButtons} from "../../views/components/ThemeSelector";
import {SavedListButtons} from "../../views/components/SavedListButtons";

const Home: () => JSX.Element = () => {
    const {isDark, handleThemeChange} = useTheme();

    return (
        <Container component="main" maxWidth="xs" sx={{
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid container sx={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Header/>
                </Grid>
                <Box sx={{mt: 5}}>
                    <Search/>
                </Box>
            </Box>
            <Grid container spacing={2} mt={2}>
                <ThemeSelectorButtons dark={isDark} onChange={handleThemeChange}/>
                <SavedListButtons/>
            </Grid>
            <Copyright/>
        </Container>
    )
}

export default Home