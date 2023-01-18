import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addNote } from "../redux/notesSlice";
import style from "./NoteNew.module.css"
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { ThemeContext } from "../App";
import { Link, useNavigate } from "react-router-dom";



const fecha = new Date();
const añoActual = fecha.toDateString();

const NotenNew = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [inputNote, setInputNote] = useState({
        id: uuid(),
        title: "",
        text: "",
        color: "--red",
        time: añoActual
    })

    const addNoteF = () => {
        const { id, title, text, color, time } = inputNote;

        dispatch(addNote({
            id, title, text, color, time
        }))


        navigate('/')

    }
    const bgChange = (color) => {
        setInputNote({ ...inputNote, color: color })
    }
    const changeInput = (e) => {

        setInputNote({
            ...inputNote,
            [e.target.name]: e.target.value
        })

    }

    const context = useContext(ThemeContext)
    return (

        <div id={context.theme} className={style.container}>
            <div style={{ backgroundColor: `var(${(inputNote.color)})` }} className={style.note} >

                <div className={style.option}>

                    <div className={style.containerColor}>
                        <button onClick={() => { bgChange("--red") }} style={{ backgroundColor: "var(--red)" }} className={style.color}>red</button>
                        <button onClick={() => { bgChange("--Orange") }} style={{ backgroundColor: "var(--Orange)" }} className={style.color}>Orange</button>
                        <button onClick={() => { bgChange("--green") }} style={{ backgroundColor: "var(--green)" }} className={style.color}>green</button>
                        <button onClick={() => { bgChange("--cyan") }} style={{ backgroundColor: "var(--cyan)" }} className={style.color}>cyan</button>
                        <button onClick={() => { bgChange("--pink") }} style={{ backgroundColor: "var(--pink)" }} className={style.color}>pink</button>
                    </div>
                    <div className={style.containerButton}>
                        <button onClick={() => addNoteF()}>Save</button>
                        <Link to='/'>Cancel</Link>
                    </div>
                </div>

                <div className={style.containerInput}>
                    <input value={inputNote.title} name="title" onChange={(e) => changeInput(e)} type="text" />
                    <textarea value={inputNote.text} name="text" onChange={(e) => changeInput(e)} cols="30" rows="10"></textarea>
                </div>





            </div>
        </div>
    )
}

export default NotenNew;