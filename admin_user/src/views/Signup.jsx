import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, TextField, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";
import { useSetRecoilState } from "recoil";
import { adminState } from "../store/atoms/admin";

export default function Signin() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const setAdminRecoil = useSetRecoilState(adminState);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/course");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email/password");
      return;
    }
    axios
      .post("/signup", {
        email: email,
        password: password,
      })
      .then((result) => {
        setAdminRecoil({
          email: email,
          username: email.split("@")[0].toLocaleUpperCase(),
          isLoggedIn: true,
          token: result.data.token,
        });
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("token", JSON.stringify(result.data.token));
        navigate("/course");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Banner>
      <Typography alignSelf={"center"} variant="h4">
        Sign Up
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
        <TextField id="email" label="Enter email" inputRef={emailRef} />
        <TextField
          id="password"
          type="password"
          label="Enter password"
          inputRef={passwordRef}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Typography variant="subtitle2" gutterBottom>
          Already have an account?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </Link>
        </Typography>
      </Box>
    </Banner>
  );
}
