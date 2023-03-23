import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../assets/styles.css"
import Swal from 'sweetalert2'


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
    if (usuario == "Poncho" && password == "123") {
      Swal.fire({
        icon: 'success',
        text: 'Exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      const usuarios = {
        usuario: usuario,
        password: password,
      };
      localStorage.setItem("usuario_prueba", JSON.stringify(usuarios));

      navigate("/home");
    } else {
      Swal.fire({
        icon: 'error',
        text: 'El usuario o la clave son incorrectas',
      })
    }
  }

  function ActivarLogin() {
    const usuario: any = localStorage.getItem("usuario_prueba");
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
    <div className="fondo">
    <Container component="main" maxWidth="xs">
    <Card sx={{ marginTop: "50%" }}>
          <CardContent>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </CardContent>
        </Card>
    </Container>
    </div>
  );
}
