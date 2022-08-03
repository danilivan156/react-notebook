import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { uid } from 'uid'
import { set, ref } from 'firebase/database';
import { db } from '../../firebase'
import React from 'react'

const Index = () => {
    const [openModal, setOpenModal] = React.useState(false)
    
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [link, setLink] = React.useState("")
    const [category, setCategory] = React.useState("")

    const writeToDatabase = () => {
        const uuid = uid()
        const date = new Date().toJSON().slice(0,10).replace(/-/g,'.');
        if(category !== "" && title !== ""){
            set(ref(db, `/${uuid}`),{
                title,
                description,
                link,
                category,
                uuid,
                date,
            })
            setTitle("")
            setDescription("")
            setLink("")
            setCategory("")
        }
    }

    return (
        <>
            <div className="add" onClick={() => setOpenModal(!openModal)}>
                <AiOutlinePlus />
            </div>
            {
                openModal && (
                    <div className="modal-wrapper">
                        <div className="add-modal">
                            <AiOutlineClose onClick={() => setOpenModal(!openModal)}/>
                            <input type="text" placeholder="input title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <input type="text" placeholder="input description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            <input type="text" placeholder="input link" value={link} onChange={(e) => setLink(e.target.value)}/>
                            <div className="custom-select">
                                <h3>Выберите категорию:</h3>
                                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="" disabled>Choose here</option>
                                    <option value="YouTube">YouTube Links</option>
                                    <option value="TikTok">TikTok Links</option>
                                    <option value="Figma">Figma Links</option>
                                    <option value="OtherLinks">Other Links</option>
                                    <option value="OtherNotes">Other Notes</option>
                                </select>
                            </div>
                            <button onClick={writeToDatabase}>Submit</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Index
