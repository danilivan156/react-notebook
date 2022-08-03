import NotePreivew from '../Components/NotePreivew'
import Modal from '../Components/Modal'
import { AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { db } from '../firebase'
import { ref, remove } from 'firebase/database';
import useRead from '../hoocks/useRead';

const CategoryPage = ({titlePage, filterPage}) => {
  
  const read = useRead(filterPage)
  //delete
  const handleDelete = (item) => {
    remove(ref(db, `/${item.uuid}`));
  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <AiOutlineSwapLeft />
        </Link>
        <h1 className="internal-link">{titlePage}</h1>
      </div>
      <div className="flex-notes">
        {read.map(item => (
          <NotePreivew 
            key={item.uuid} 
            title={item.title} 
            description={item.description} 
            link={item.link} 
            date={item.date} 
            handleDelete={handleDelete} 
            item={item}
          />
        ))}
      </div>
      <Modal/>
    </div>
  )
}

export default CategoryPage
