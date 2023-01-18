
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import { editNote } from "../redux/notesSlice";
import style from "./NoteEdit.module.css"



const NoteEdit = () => {
    let params = useParams();
    const context = useContext(ThemeContext)
    const navigate = useNavigate()


    const notes = useSelector((state) => state.notes.notes)

    useEffect(() => {

        let si = notes.find(e => e.id == params.id)
        console.log(si)
        setInputNote(si)

    }, [])

    const dispatch = useDispatch()

    const [inputNote, setInputNote] = useState({
        id: "",
        title: "",
        text: "",
        color: "",
        time: ""
    })

    const changeNoteF = () => {


        const fecha = new Date();
        const añoActual = fecha.toDateString();

        const { id, title, text, color, time } = inputNote;
        dispatch(editNote({
            id, title, text, color, time: añoActual
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
                        <button onClick={() => changeNoteF()}>save</button>
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

export default NoteEdit;