import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const index = ({title,count,url}) => {
  return (
    <Link to={url} className="title-link">
        <div className="title-link__item">
            <h1>{title}</h1>
            <h4>{count}</h4>
        </div>
        <div className="title-link__ico">
            <AiOutlineRight/>
        </div>
    </Link>
  )
}

export default index
