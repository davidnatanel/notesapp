
import style from "./Note.module.css"

import { IoIosRemoveCircle } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/notesSlice";


const Note = ({ title, text, color, time, id }) => {
    const dispatch = useDispatch()

    return (
        <div className={style.container} style={{ backgroundColor: `var(${color})` }}>
            <div className={style.containersvg}>
                <Link to={`noteEdit/${id}`}><FiEdit /></Link >
                <IoIosRemoveCircle onClick={() => dispatch(removeNote(id))} />
            </div>

            <h2>{title}</h2>
            <textarea value={text} readOnly />
            <p>{time}</p>
        </div>

    )
}

export default Note;