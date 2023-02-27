import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LocalMoviesSharpIcon from "@mui/icons-material/LocalMoviesSharp";
import Typography from "@mui/material/Typography";

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