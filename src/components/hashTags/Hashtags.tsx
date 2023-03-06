
import style from "./index.module.css"

export default function Hashtags({ tags }: {tags:string[]}) {

    return (
    <ul className={style.Hashtags}>
        { tags.map( (city, index) => <li key = {index}>{city}</li>)}
    </ul>
  );
}
