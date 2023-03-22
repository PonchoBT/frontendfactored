import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  function ClickHome() {
    localStorage.removeItem("usuario_prueba");
    navigate("/login");
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button onClick={ClickHome} variant="contained">
              Back Home
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://frontendfactored.s3.us-west-1.amazonaws.com/page404.png"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
