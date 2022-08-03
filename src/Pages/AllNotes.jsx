import React, { useEffect } from 'react'
import NotePreivew from '../Components/NotePreivew'
import Modal from '../Components/Modal'
import { AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { db } from '../firebase'
import { ref, onValue, remove } from 'firebase/database';

const AllNotes = ({titlePage}) => {
  const [notes, setNotes] = React.useState([])
  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setNotes([]);
      const data = snapshot.val();
      if (data !== null) {
        //const arrCategory = Object.values(data).filter(n => n.category === 'Cars');
        Object.values(data).map((item) => {
          return setNotes((oldArray) => [...oldArray, item]);
        });
      }
    });
  }, []);

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
        {notes.map(item => (
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

export default AllNotes
