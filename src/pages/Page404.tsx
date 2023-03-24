import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

export default function Page404() {

  return (
    <div className="page">
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
          <Grid xs={12} md={12} textAlign={"center"}>
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
    </div>
  );
}
