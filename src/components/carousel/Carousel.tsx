import React, { useState } from "react";
import style from "./index.module.css"



export default function Carousel({pictures}:{pictures:string[]}) {

  const [currentPage, setCurrentPage] = useState(1)
  
  const preSlide = () => {
 
    if(currentPage === 1 ) {
      setCurrentPage(pictures.length)
    }else{

      setCurrentPage(currentPage - 1)
    }
    
  }

  const nextSlide = () => {
    if(currentPage > pictures.length - 1) {
      setCurrentPage(1)
    }else{
      setCurrentPage(currentPage+1)
    }
    
  }

  return (
    <section className={style.Carousel}>
      <div className={style.Carousel__imgWrap}>
        {<img  className={style.Carousel__img} src={pictures[currentPage-1]} alt="carrousel" />}
      </div>
      <i className={`fa-solid fa-chevron-left ${style.Carousel__chevronLeft}`} onClick = {preSlide}></i>
      <i className={`fa-solid fa-chevron-right ${style.Carousel__chevronRight}`} onClick = {nextSlide}></i>
      <div className={style.Carousel__pages}>
        <span className={style.Carousel__current}>{currentPage}</span>/<span className={style.Carousel__total}>{pictures.length}</span>
      </div>
    </section>
  );
}
