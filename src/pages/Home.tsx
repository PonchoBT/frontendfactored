import {
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../services/api";

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [datos, setDatos] = useState<any>();
  const [valor, setValor] = useState("");
  const [count, setCount] = useState(0);
  const [activo, setActivo] = useState(false);

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    setValor(valor);
    switch (valor) {

      case "people":
        endpoint.getPeople(value).then((res) => {
          setDatos(res.data.results);

 
        });
        break;
      case "planets":
        endpoint.getPlanets(value).then((res) => {
          setDatos(res.data.results);
        });
        break;
      case "films":
        endpoint.getfilms(value).then((res) => {
          setDatos(res.data.results);
        });
        break;
    }
  };


  function elegirApi(e: any) {

    setActivo(true);
   
    setValor(e.value);

    setDatos([]);
        switch (e.value) { 

      case "people":
        endpoint.getPeople(page).then((res) => {
          setDatos(res.data.results);
          setCount(9);
        });
        break;
      case "planets":
        endpoint.getPlanets(page).then((res) => {
          setDatos(res.data.results);
          setCount(6);
        });
        break;
      case "films":
        endpoint.getfilms(page).then((res) => {
          setDatos(res.data.results);
          setCount(1);
        });
        break;
    }

  }

  function ActivarLogin() {
    const usuario: any = localStorage.getItem("usuario_prueba");
    const perfil = JSON.parse(usuario);

    if (!perfil) {
      navigate("/login");
    } else {
      setUsuario(perfil.usuario);
    }
  }

  useEffect(() => {
    ActivarLogin();
  }, []);

  return (
    <div>
      <Container>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => elegirApi(e.target)}
          >
            {/* <MenuItem value="all">all</MenuItem> */}
            <MenuItem value="people">People</MenuItem>
            <MenuItem value="planets">Planets</MenuItem>
            <MenuItem value="films">Films</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={2}>
          {datos
            ? datos.map((x: any) => (
                <Grid item xs={3}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {x.name}
                        {x.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : null}
        </Grid>
        {
          activo? 
      <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
    : ""

        }
  
      </Container>
    </div>
  );
}
