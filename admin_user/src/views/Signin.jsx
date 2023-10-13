import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button, Link } from "@mui/material";
import { useRef } from "react";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate =useNavigate()
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
  };
  return (
    <Banner>
      <Typography alignSelf={"center"} variant="h4">
        Sign in
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
        }}
      >
        <TextField id="email" label="Enter email" inputRef={email} />
        <TextField
          id="password"
          type="password"
          label="Enter password"
          inputRef={password}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Sign In
        </Button>
        <Typography variant="subtitle2" gutterBottom>
          Dont't have an account? <Link
  component="button"
  variant="body2"
  onClick={() => {
    navigate("/signup")
  }}
>Sign Up</Link>
        </Typography>
      </Box>
    </Banner>
  );
}
