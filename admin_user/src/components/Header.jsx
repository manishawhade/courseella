import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigate } from "react-router-dom";
import { Button, CssBaseline, Typography } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: "#fff", color: "black" }}>
        <Toolbar>
          <Button variant="text" color="success" onClick={() => navigate("/")}>
            <Typography variant="h5">Courseella</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
