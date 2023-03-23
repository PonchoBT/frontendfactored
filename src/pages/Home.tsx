import { Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../services/api";


export default function Home() {
 
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [datos, setDatos] = useState<any>();


  function elegirApi(e:any)
  {


    setDatos([]);
  
      switch (e.value) {
        // case 'all':
        // const obj= new Array<any>();
        //   endpoint.getPeople().then((res) => {
        //     obj.push(res.data.results);

        //     });
        //     endpoint.getPlanets().then((res) => {
        //       obj.push(res.data.results);
  
        //       });
        //       endpoint.getfilms().then((res) => {
        //         obj.push(...res.data.results);
    
        //         });

        //         var obj2 = [];

        //         obj2.push(...obj);

        //         console.log(obj2);
                
        //        setDatos(obj2);
                
        //   break;
        case 'people':
          endpoint.getPeople().then((res) => {
            setDatos(res.data.results);
            });
          break;
          case 'planets':
            endpoint.getPlanets().then((res) => {
              setDatos(res.data.results);
              });
            break;
            case 'films':
              endpoint.getfilms().then((res) => {
                setDatos(res.data.results);
                });
              break;

      }

      console.log(datos);
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


<Container maxWidth="sm">
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={e=>elegirApi(e.target)}
  >
    {/* <MenuItem value="all">all</MenuItem> */}
    <MenuItem value="people">People</MenuItem>
    <MenuItem value="planets">Planets</MenuItem>
    <MenuItem value="films">Films</MenuItem>
  </Select>
</FormControl>
<Grid container spacing={2}>
  {
   datos ? datos.map((x:any) =>
    
      <Grid item xs={3}>
      <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {x.name}{x.title}
            </Typography>

          </CardContent>
        </Card>
      </Grid>
    ):null

  }
 

</Grid>

      </Container>

    </div>
  );
}
