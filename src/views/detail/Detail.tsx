
import {  useLoaderData, useParams } from "react-router-dom";
import style from "./index.module.css"
import Carousel from '../../components/carousel/Carousel';
import Hashtags from '../../components/hashTags/Hashtags';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import CollapseContent from '../../components/collapseContent/CollapseContent';
import { LodgesLoader } from "../home/loader";

interface ILodge {
  id:string;
  cover:string;
  title:string;
  [key:string]:any
}

export default function Detail() {
  const { lodges }:{lodges:ILodge[]} = useLoaderData() as Awaited<ReturnType<typeof LodgesLoader>>;
  const { id } = useParams()
  const lodge = lodges.find( lodge => lodge.id === id)
  if(!lodge) throw Error ('le logement n\'existe pas')
 
  return (
    <main className={style.Detail}>
      <Carousel pictures = {lodge.pictures} />
      <section className={style.Detail__info}>
        <div className={style.Detail__locationWrap}>
          <div className={style.Detail__location}>
            <h2 className={style.Detail__location__title}>
              {lodge.title}
            </h2>
            <p className={style.Detail__location__city}>{lodge.location}</p>
            <Hashtags tags = { lodge.tags } />
          </div>
          <div className={style.Detail__evaluation}>
            <div className={style.Detail__evaluation__host}>
              <p className={style.host__name}> { lodge.host.name }</p>
              <img
                className={style.host__avatar}
                src={lodge.host ? lodge.host.picture : ""}
                alt=""
              />
            </div>
            <Rating rating = {lodge.rating }/>
          </div>
        </div>
        <div className={style.Detail__contentWrap}>
          <Collapse title="Description">
            <CollapseContent content={lodge.description} />
          </Collapse>
          <Collapse title="Équipements">
            <CollapseContent equipments = {lodge.equipments}/>
          </Collapse>
        </div>
      </section>
    </main>
  )
}
