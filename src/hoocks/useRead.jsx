import React, { useEffect } from 'react'
import { db } from '../firebase'
import { ref, onValue } from 'firebase/database';

const useRead = (categoryName) => {
    const [notes, setNotes] = React.useState([])

    useEffect(() => {
      onValue(ref(db), (snapshot) => {
        setNotes([]);
        const data = snapshot.val();
        if (data !== null) {
          const arrCategory = Object.values(data).filter(n => n.category === categoryName);
          arrCategory.map((item) => {
            return setNotes((oldArray) => [...oldArray, item]);
          });
        }
      });
    }, [categoryName]);

    return (notes)
}

export default useRead
