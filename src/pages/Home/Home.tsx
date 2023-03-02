import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchInput from "../../views/components/SearchInput";
import Copyright from "../../views/layout/Copyright";
import { useTheme } from "../../hooks";
import { Header } from "../../views/layout/Header";
import { ThemeSelectorButtons } from "../../theme/components/ThemeSelector";
import { ButtonLists } from "../../views/components/ButtonLists";
import BaseContainer from "../../views/layout/BaseContainer";
import { useMovieImages, useMovieVideos } from "../../api/movies/movies";
import { SavedList } from "../../api/libs/savedList";
import storage from "../../utils/storage";

const Home: () => JSX.Element = () => {
  const { isDark, handleThemeChange } = useTheme();

  const { data: data2 } = useMovieVideos({
    movieId: storage.get(SavedList.Watch)[0],
  });

  return (
    <BaseContainer>
      <Header />
      <Box sx={{ mt: 2 }}>
        <SearchInput />
      </Box>
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{
          justifyContent: "center",
        }}
      >
        <ThemeSelectorButtons dark={isDark} onChange={handleThemeChange} />
        <ButtonLists />
      </Grid>
      <Copyright />
    </BaseContainer>
  );
};

export default Home;
