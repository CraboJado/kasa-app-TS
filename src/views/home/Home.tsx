
import Banner from "../../components/banner/Banner"
import bannerImg from '../../assets/images/MaskGroup.png'
import style from './index.module.css'
import Card from "../../components/card/Card"

import {  useLoaderData} from "react-router-dom";
import { LodgesLoader } from "./loader";


interface ILodge {
  id:string;
  cover:string;
  title:string;
  [key:string]:any
}


export default function Home() {

  const { lodges } = useLoaderData() as Awaited<ReturnType<typeof LodgesLoader>>;


  return (
    <main className={style.Home}>
      <Banner img = {bannerImg} page="home"/>
      <section className={style.Home__cardList}>
          {
            lodges.map( (lodge:ILodge) => <Card key = {lodge.id} {...lodge}/> )
          }
        </section>
    </main>
  )
}
