import React from "react";
import { useNavigate } from "react-router-dom";
import style from './index.module.css'

interface IProps {
  id:string;
  cover:string;
  title:string;
  [propName:string]:any
}


export default function Card(lodge:IProps) {

  const navigate = useNavigate();

  const checkDetail = (id:string) => {
    navigate(`/detail/${id}`);
  }
  
  return (
    <article className={style.Card} onClick = { () => checkDetail(lodge.id) }>
      <img className={style.Card__img} src={lodge.cover} alt="Card image" />
      <h2 className={style.Card__title} >{lodge.title}</h2>
    </article>
  );
}