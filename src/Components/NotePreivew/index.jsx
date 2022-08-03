import React from 'react'
import NoteItem from '../../Components/NoteItem'
import { AiOutlineClose } from "react-icons/ai";
import style from './Note.module.sass'


const Index = ({title, description, link, date, handleDelete, item}) => {
  const [openModal, setOpenModal] = React.useState(false)
  const closeModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className={style.item}>
      <h3 onClick={closeModal}>{title}</h3>
      <div className={style.date}>{date}</div>
      <AiOutlineClose onClick={() => handleDelete(item)}/>
      {
        openModal && (
          <div className={style.modalWrapper}>
            <div className={style.modal}>
              <NoteItem 
                closeModal={closeModal} 
                title={title} 
                description={description} 
                link={link} 
                handleDelete={handleDelete} 
                item={item}/>
            </div>
          </div>
          
        )
      }

    </div>
  )
}

export default Index
