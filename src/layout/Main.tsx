import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/router";
import Header from "./Header";


export default function Main() {

  return (
    <BrowserRouter>

      <Router />
    </BrowserRouter>
  );
}
