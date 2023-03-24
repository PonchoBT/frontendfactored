import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/styles.css";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  const usuarioChange = (event: any) => {
    setUsuario(event.target.value);
  };

  const passwordChange = (event2: any) => {
    setPassword(event2.target.value);
  };

  function ClickLogin() {
    console.log(usuario);
    console.log(password);
    if (usuario == "admin" && password == "123") {
      Swal.fire({
        icon: "success",
        text: "Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      const usuarios = {
        usuario: usuario,
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(usuarios));

      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        text: "Incorrect user or password",
      });
    }
  }

  function ActivarLogin() {
    const usuario: any = localStorage.getItem("user");
    const perfil = JSON.parse(usuario);

    if (perfil) {
      navigate("/home");
    }
  }

  useEffect(() => {
    ActivarLogin();
  }, []);

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | any;
  }) => {
    event.preventDefault();
    const data: any = event.currentTarget;

    setUsuario(data);
    console.log(data);
  };

  return (
    <div className="background">
      <Container component="main" maxWidth="xs">
        <Card sx={{ marginTop: "50%" }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://frontendfactored.s3.us-west-1.amazonaws.com/singlogo.png"
                style={{ height: "150px", mixBlendMode: "hard-light" }}
              />
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="User"
                  name="user"
                  autoComplete="user"
                  autoFocus
                  onChange={usuarioChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={passwordChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={ClickLogin}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
