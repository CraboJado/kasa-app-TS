import { Link, useRouteError } from "react-router-dom"
import style from "./index.module.css"

export default function ErrorElement() {

    const error:any = useRouteError()
    console.log(error)

  return (
    <section className={style.Error}>
      
      <div className={style.Error__msg}>
        <span>Oups! {error.message}, </span>
        <span>veuillez réessayer plus tard</span>
      </div>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  )
}
