import Box from "@mui/material/Box";
import Header from "../components/Header";
import { Grid } from "@mui/material";
import BannerIcon from "../assets/course_banner.png";

export default function Banner(props) {
  return (
    <>
      <Header />
      <Box
        sx={{
          margin: "100px 20px 0 20px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={{ sm: 2, md: 2 }}
        >
          <Grid item xs sm={6} md={6}>
            <img alt="banner" src={BannerIcon} width="100%" />
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent={"center"}
            item
            xs={12}
            sm={6}
            md={6}
          >
            {props.children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
