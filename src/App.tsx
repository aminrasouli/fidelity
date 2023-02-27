import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import {Button, ButtonGroup, ToggleButton, ToggleButtonGroup} from "@mui/material";
import Search from "./views/components/Search";
import {getTheme} from "./theme";
import {useTheme} from "./hooks";
import Copyright from "./views/components/Copyright";

export function ThemeSelectorButtons({dark, onChange}: { dark: boolean, onChange: () => void }): JSX.Element {
    return (
        <Grid item>
            <ToggleButtonGroup
                color="secondary"
                value={dark ? "dark" : "light"}
                exclusive
                onChange={onChange}
            >
                <ToggleButton value="dark">Dark</ToggleButton>
                <ToggleButton value="light">Light</ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    )
}

export function SavedListButtons(): JSX.Element {
    return (
        <>
            <Grid item>
                <ButtonGroup color="secondary" variant="outlined" sx={{
                    height: "100%"
                }}>
                    <Button>Favorite</Button>
                    <Button>Watch Later</Button>
                </ButtonGroup>
            </Grid>
        </>
    );
}

export function Header(): JSX.Element {
    return (
        <>
            <Grid item>
                <Avatar sx={{m: 2, bgcolor: "primary.main", padding: 3}}>
                    <LocalMoviesSharpIcon fontSize="large"/>
                </Avatar>
            </Grid>
            <Grid item>
                <Typography component="h1" variant="h2" style={{fontWeight: 700}}>
                    Fidelity
                </Typography>
            </Grid>
            <Grid item>
                <Typography component="p" variant="body2">
                    Millions of movies, TV shows and people to discover. Explore now.
                </Typography>
            </Grid>
        </>
    );
}

export default function App(): JSX.Element {
    const {isDark, handleThemeChange} = useTheme();

    return (
        <ThemeProvider theme={getTheme(isDark)}>
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
        </ThemeProvider>
    );
}