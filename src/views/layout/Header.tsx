import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Header(): JSX.Element {
	return (
		<Box
			sx={{
				marginTop: 8,
				marginBottom: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Grid
				container
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Grid item>
					<Avatar sx={{ m: 2, bgcolor: 'primary.main', padding: 3 }}>
						<LocalMoviesSharpIcon fontSize="large" />
					</Avatar>
				</Grid>
				<Grid item>
					<Typography component="h1" variant="h2" style={{ fontWeight: 700 }}>
						Fidelity
					</Typography>
				</Grid>
			</Grid>
			<Grid>
				<Typography component="p" variant="body2">
					Millions of movies to discover. Explore now.
				</Typography>
			</Grid>
		</Box>
	);
}
