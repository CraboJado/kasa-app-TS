
import Banner from "../../components/banner/Banner"
import bannerImg from '../../assets/images/MaskGroup.png'
import style from './index.module.css'
import Card from "../../components/card/Card"
import { useEffect, useState } from "react"


interface ILodge {
  id:string;
  cover:string;
  title:string;
  [propName:string]:any
}

export default function Home() {

  const [lodgeList, setLodgeList] = useState<ILodge[]>([])

  useEffect(()=>{

    fetch('http://localhost:3000/logements.json')
    .then( response => response.json())
    .then( (data:ILodge[]) => setLodgeList(data))
    .catch( err => console.log(err))

  },[])
  
  return (
    <main className={style.Home}>
      <Banner img = {bannerImg} page="home"/>
      <section className={style.Home__cardList}>
          {
            lodgeList.map( (lodge:ILodge) => <Card key = {lodge.id} {...lodge}/> )
          }
        </section>
    </main>
  )
}
