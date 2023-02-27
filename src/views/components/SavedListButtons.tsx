import Grid from "@mui/material/Grid";
import {Button, ButtonGroup} from "@mui/material";

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