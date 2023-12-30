import React, { useState } from 'react';
import axios from 'axios';
import { RxCross1 } from 'react-icons/rx';

const Update = ({ setShowDropdown, updateContent, setRefresh }) => {

    const [input, setInput] = useState(updateContent.name);

    const updatedValue = () => {
        axios.put(`https://todo-vl9r.onrender.com/todos/update/${updateContent.id}`, { name: input })
            .then(() => {
                console.log("Updated Sucessfully");
                setRefresh((prevState) => !prevState);
                setShowDropdown(false);
            })
    }

    return (
        <div className='Dropdown'>
            <div className='popup'>
                <h1>update Todos</h1>
                <RxCross1 className='CloseIcon' onClick={() => setShowDropdown(false)} />
                <div className='popup__input_holder'>
                    <input type='text' value={input} placeholder='Update todo ..' onChange={(e) => setInput(e.target.value)} />
                    <button onClick={updatedValue}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Update