import { Link } from "react-router-dom";
import style from './categoryItem.module.sass'

const index = ({imgUrl,link,title,count}) => {
  return (
    <Link to={link}className={style.item}>
        <h3>{title}</h3>
        <img src={imgUrl} alt=""/>
        <div className={style.count}>{count} notes</div>
    </Link>
  )
}

export default index
