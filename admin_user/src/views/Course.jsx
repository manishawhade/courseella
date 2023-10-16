import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { COURSES } from "../constant";
import CardComponent from "../components/CardComponent";
import DebounceSeach from "../components/DebounceSeach";

export default function Course() {
  function searchApi(value) {
    console.log("value=> ", value);
  }
  return (
    <Box sx={{ margin: "5px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <DebounceSeach searchCallback={searchApi} />
        <Button sx={{ ml: 1 }} variant="contained">
          Add Course
        </Button>
      </Box>
      <Typography mt={1} variant="h5">
        {COURSES ? COURSES.length : 0} Courses
      </Typography>
      <Grid container spacing={2} mt={2}>
        {COURSES &&
          COURSES.map((item) => (
            <Grid item key={item.title}>
              <CardComponent {...item} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
