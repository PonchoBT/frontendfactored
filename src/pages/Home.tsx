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
import "../assets/styles.css";

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
    <div className="fondo2">
      <Container sx={{ mt: 15}}>
        <Card>
          <CardContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select"
                onChange={(e) => elegirApi(e.target)}
              >
                <MenuItem value="films">Films</MenuItem>
                <MenuItem value="planets">Planets</MenuItem>
                <MenuItem value="people">People</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
        <Grid container spacing={2} sx={{ mt: 5, mb: 15 }}>
          {(() => {
            switch (valor) {
              case "people":
                return datos
                  ? datos.map((x: any) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 20 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {x.name}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Height
                              </span>
                              :{x.height}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Mass
                              </span>
                              :{x.mass}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Hair color
                              </span>
                              :{x.hair_color}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Skin color
                              </span>
                              :{x.skin_color}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Eye color
                              </span>
                              : {x.eye_color}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Mass
                              </span>
                              :{x.birth_year}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Gender
                              </span>
                              :{x.gender}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  : null;
              case "planets":
                return datos
                  ? datos.map((x: any) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 20 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {x.name}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Rotation period
                              </span>
                              :{x.rotation_period}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Orbital period
                              </span>
                              :{x.orbital_period}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Diameter
                              </span>
                              :{x.diameter}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                climate
                              </span>
                              :{x.climate}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Gravity
                              </span>
                              :{x.gravity}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Terrain
                              </span>
                              :{x.terrain}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Surface water
                              </span>
                              :{x.surface_water}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Population
                              </span>
                              :{x.population}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  : null;

              case "films":
                return datos
                  ? datos.map((x: any) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 20 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {x.title}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Director
                              </span>
                              :{x.director}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Producer
                              </span>
                              :{x.producer}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <span
                                style={{ color: "#0067cd", fontWeight: 400 }}
                              >
                                Release date
                              </span>
                              :{x.release_date}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {x.opening_crawl}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  : null;
            }
          })()}
        </Grid>
        {activo ? (
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              sx={{
                "& .Mui-selected": {
                  background: "#ffe819",
                },
                "& .MuiPaginationItem-root": {
                  color: "white",
                  fontSize: "25px",
                },
              }}
            />
          </Stack>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}
