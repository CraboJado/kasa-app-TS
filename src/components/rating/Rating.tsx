
import style from "./index.module.css";

export default function Rating({ rating }: {rating:string}) {
  
  const lis = [1, 2, 3, 4, 5];

  return (
    <ul className={style.Rating}>
      { lis.map((el, index) => 
        el <= + rating ? (
          <li  key={index}>
            <i className="fa-solid fa-star"></i>
          </li>
        ) : (
          <li key={index} className={style.StarsGrey}>
            <i className="fa-solid fa-star"></i>
          </li>
        )
      ) }

    </ul>
  );
}
