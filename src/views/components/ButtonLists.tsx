import Grid from "@mui/material/Grid";
import {Button, ButtonGroup} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

export function ButtonLists(
    {showBackButton = false}: { showBackButton?: boolean }
): JSX.Element {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(-1);
    }

    return (
        <>
            <Grid item>
                {showBackButton &&
                    <Box mr={1} display="inline">
                        <Button onClick={onBackClick} color="secondary" variant="outlined" startIcon={
                            <ArrowBackIosIcon/>
                        }>Back</Button>
                    </Box>
                }
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