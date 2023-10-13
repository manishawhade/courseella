import { Box, Typography } from "@mui/material";
import InPorogrssIcon from "../assets/in_progress.png";

export default function User() {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <Typography variant="h3">Work in Progrss</Typography>
        <img style={{ margin: "auto" }} src={InPorogrssIcon} alt="" />
      </div>
    </Box>
  );
}
