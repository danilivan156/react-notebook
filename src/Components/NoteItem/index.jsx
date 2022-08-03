import { AiOutlineSwapLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from './NoteItem.module.sass'

const NoteItem = ({closeModal, title, description, link, handleDelete, item}) => {
  return (
    <>
        <div className={style.header}>
            <div className={style.left}>
                <div onClick={closeModal}>
                    <AiOutlineSwapLeft onClick={closeModal}/>
                </div>
                <h2 className={style.title}>{title}</h2>
            </div>
            <div className={style.flex}>
                <AiOutlineClose onClick={() => handleDelete(item)}/>
            </div>
        </div>
        <p className={style.text}>{description}</p>
        <a href={link} target="_blanck" className={style.link}>
            Перейти по ссылке
        </a>
    </>
  )
}

export default NoteItem
