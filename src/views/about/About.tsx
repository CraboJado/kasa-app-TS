import Banner from "../../components/banner/Banner"
import bannerImg from "../../assets/images/about-banner.png"
import style from "./index.module.css"
import Collapse from "../../components/collapse/Collapse"
import CollapseContent from "../../components/collapseContent/CollapseContent"

export default function About() {
  return (
    <main className={style.About}>
      <Banner img={bannerImg}/>
      <section className={style.About__companyValues}>
        <Collapse title={"Fiabilité"}>
          <CollapseContent
            content={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            }
          />
        </Collapse>
        <Collapse title={"Respect"}>
          <CollapseContent
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
        </Collapse>
        <Collapse title={"Service"}>
          <CollapseContent
            content={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
          />
        </Collapse>
        <Collapse title={"Sécurité"}>
          <CollapseContent
            content={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </Collapse>
      </section>

    </main>
  )
}
