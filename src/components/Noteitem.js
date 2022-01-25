import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const now = note.date.toString();
    return (
        <>

            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2>
                        <div className="accordion-button">
                            {note.title}
                            <h5 className='mx-5 position-absolute end-0'>
                                <i className="fas fa-trash-alt " onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", 'success') }} ></i>
                                <i className="fas fa-edit mx-3 " onClick={() => { updateNote(note) }}></i>
                            </h5>
                        </div>
                    </h2>
                    <div className="accordion-body">
                        <strong>{note.description}</strong>
                        <br />
                        <div className='my-3'>Time : {note.tag}</div>
                        <div className='my-3'>Date : {now.slice(0, 10)} {now.slice(11, 19)}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem
