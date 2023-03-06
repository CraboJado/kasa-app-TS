import React, { useState } from "react";
import style from "./index.module.css"


export default function Collapse({ title, children }:{ title:string, children:JSX.Element }) {

  const [isOpen, setIsOpen] = useState(false)

  const showContent = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className={style.Collapse}>
      <div className={style.Collapse__header} onClick = { showContent }>
        <h3 className={style.Collapse__title}>{title}</h3>
        {
          isOpen ? 
          <i className={`fa-sharp fa-solid fa-chevron-up ${style.Collapse__chevronUp}`}></i>
          :
          <i className={`fa-sharp fa-solid fa-chevron-down ${style.Collapse__chevronDown}`}></i>
        }
      </div>
      {isOpen ? children : null}
    </article>
  );
}
