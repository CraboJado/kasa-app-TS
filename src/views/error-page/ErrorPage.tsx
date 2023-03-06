import React from "react";
import style from "./index.module.css"
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className={style.Error}>
      <p className={style.Error__code}>404</p>
      <div className={style.Error__msg}>
        <span>Oups! La page que</span>
        <span>vous demandez n'existe pas.</span>
      </div>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}