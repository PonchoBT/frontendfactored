// import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/router";
import Header from "./Header";


export default function Main() {
  // const [activo, setActivo] = useState(true);

  // function ActivarLogin() {
  //   const usuario: any = localStorage.getItem("usuario_prueba");
  //   const perfil = JSON.parse(usuario);

  //   if (perfil) {
  //     setActivo(true);
  //   } else {
  //     setActivo(false);
  //   }
  //   console.log(perfil);
  //   console.log(activo);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     ActivarLogin();
  //   }, 1000);
  // });

  return (
    <BrowserRouter>
      {/* {activo ? <Header /> : null} */}
      <Header />
      <Router />
    </BrowserRouter>
  );
}
