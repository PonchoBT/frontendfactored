import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");

  function ClickCerrar() {
    localStorage.removeItem("usuario_prueba");
    navigate("/login");
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
      <h2>{usuario}</h2>
      <Button onClick={ClickCerrar} variant="contained">
        Cerrar
      </Button>
    </div>
  );
}
