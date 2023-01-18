import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { ThemeContext } from "../App";
import { addNote } from "../redux/notesSlice";
import './../index.css';
import style from "./Home.module.css"
import Note from "./Note";


const Home = () => {
    const notes = useSelector((state) => state.notes.notes)
    const searchNotes = useSelector((state) => state.notes.searchNotes)
    const context = useContext(ThemeContext)


    return (

        <div className={style.Container} id={context.theme}>
            <div className={style.notesContainer}>

                {
                    searchNotes.length > 0 ?
                        searchNotes.map((e) => {
                            return (
                                <Note key={e.id} title={e.title} text={e.text} color={e.color} time={e.time} id={e.id} />
                            )
                        }) :
                        notes.map((e) => {
                            return (
                                <Note key={e.id} title={e.title} text={e.text} color={e.color} time={e.time} id={e.id} />
                            )
                        })


                }


            </div>




        </div>

    )
}

export default Home;