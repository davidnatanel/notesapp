
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Home from './Page/Home';
import { FaSearch } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';
import { BsFillFileEarmarkPlusFill } from 'react-icons/bs';
import NoteEdit from './Page/NoteEdit';
import NotenNew from './Page/NoteNew';
import { useDispatch, useSelector } from 'react-redux';
import { chargeNote, searchNoteadd } from './redux/notesSlice';
export const ThemeContext = createContext(null);

function App() {
  const notes = useSelector((state) => state.notes.notes)
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }


  useEffect(() => {
    dispatch(chargeNote())
  }, [])


  const Search = (e) => {

    let s = notes.filter(dato => dato.title.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
    dispatch(searchNoteadd(s))

  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <nav className={`${theme}`}>
        <ul className='list'>

          <li><Link to='/'>  <GiPalmTree style={{ fontSize: '3em' }} /></Link> </li>

          <li className='input'><input onChange={(e) => Search(e)} />   <FaSearch style={{ fontSize: '2em', color: 'gray' }} /></li>

          <li><div className='darklight'><button className={theme == 'dark' ? 'darkd' : 'lightl'} onClick={() => toggleTheme()}>{theme == 'dark' ? 'dark' : 'ligth'}</button></div></li>

          <li><Link to='notenew'> <BsFillFileEarmarkPlusFill style={{ fontSize: '3em' }} /></Link> </li>

        </ul>

      </nav>

      <Routes>


        <Route path="/" element={<Home />} />




        <Route path="noteEdit/:id" element={<NoteEdit />} />
        <Route path="notenew" element={<NotenNew />} />


      </Routes>
    </ThemeContext.Provider >
  );
}





export default App;
