import React from 'react'
import Notes from './Notes';


const Dashboard = (props) => {
    const { showAlert } = props;

    return (
        <div className='container my-3'>
            <Notes showAlert={showAlert} setProgress={props.setProgress} />

        </div>
    )
}

export default Dashboard
