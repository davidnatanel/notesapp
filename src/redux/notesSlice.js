import { createSlice } from '@reduxjs/toolkit'
// {
//     id: 1,
//     title: "Primer nota",
//     text: "Hola",
//     color: "--red",
//     time: "Mon Jan 09 2023"
// }

const initialState = {
    searchNotes: [],
    notes: [

    ],
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        chargeNote: (state, action) => {
            if (localStorage.getItem("notes") == null) {

                let nuevo = []
                localStorage.setItem('notes', JSON.stringify(nuevo))

                state.notes = []

            }




            state.notes = JSON.parse(localStorage.getItem("notes"))

        },

        searchNoteadd: (state, action) => {


            state.searchNotes = action.payload

        },

        addNote: (state, action) => {

            let search = state.notes.find(e => action.payload.id == e.id)


            if (!search) {
                let newsave = [...state.notes, action.payload]
                localStorage.setItem('notes', JSON.stringify(newsave))

                state.notes = [...state.notes, action.payload]

            }






        },
        removeNote: (state, action) => {
            console.log(action)
            let search = state.notes.find(e => action.payload == e.id)
            if (search) {

                let filter = state.notes.filter(e => action.payload != e.id)
                localStorage.setItem('notes', JSON.stringify(filter))

                state.notes = filter
            }

        },
        editNote: (state, action) => {

            let search = state.notes.find(e => action.payload.id == e.id)

            if (search) {

                let filter = state.notes.filter(e => action.payload.id != e.id)
                localStorage.setItem('notes', JSON.stringify([...filter, action.payload]))

                state.notes = [...filter, action.payload]
            }

        },

    },
})


export const { addNote, removeNote, editNote, searchNoteadd, chargeNote } = notesSlice.actions

export default notesSlice.reducer;
