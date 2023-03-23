import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [datos, setDatos] = useState({});

  function elegirApi(e:any)
  {
      console.log(e);
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
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={e=>elegirApi(e.target)}
  >
    <MenuItem value="people">People</MenuItem>
    <MenuItem value="planets">Planets</MenuItem>
    <MenuItem value="flims">Films</MenuItem>
  </Select>
</FormControl>
    </div> 
  );
}
