import React from "react";

import style from './index.module.css'

interface IProps {
    img:string,
    page?:string
}

export default function Banner(props:IProps) {

  return (
    <section className={style.Banner}>
      { props.page && <h1 className={style.Banner__title}>chez vous, partout et ailleurs</h1>}
      <img className={style.Banner__img} src={ props.img } alt="" />
    </section>
  );
}