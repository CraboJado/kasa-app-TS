import React from "react";
import style from "./index.module.css"

export default function CollapseContent({ content, equipments }: {content?:string,equipments?:string[] }) {

  if (equipments) {

    return (
      <ul className={style.CollapseContent}>
        {equipments.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    );
  } else {

    return <p className={style.CollapseContent}> {content} </p>;
    
  }
}
