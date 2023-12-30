
import React, { useEffect, useState } from 'react';
import Datas from './Todo_compo/data';
import axios from 'axios';
import Update from './Todo_compo/update';
import('./todo_styles/new.css');

const Ap = () => {
    const [todo, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [updateContent, setUpdateContent] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const userInfoString = localStorage.getItem('userInfo');
        if (!userInfoString) {
            console.log("Userinfo not available in localStorage.");
            return;
        }

        try {
            const userInfo = JSON.parse(userInfoString);
            const { token } = userInfo;

            // Update the URL to fetch the list of todos or a specific todo by ID
            axios.get('https://todo-vl9r.onrender.com/todos', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                setTodos(response.data);
            }).catch((err) => {
                console.log("Error fetching todos:", err);
            });
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    }, [refresh]);

    const saveData = () => {
        if (input.trim() === '') {
            alert('Please enter data.');
            return;
        }
        axios.post("https://todo-vl9r.onrender.com/todos/post", { name: input }, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`,
            },
        },)
            .then((res) => {
                console.log("Todo saved successfully:", res.data);
                setRefresh((prevState) => !prevState);
                setInput("");
            })
            .catch(err => {
                console.log("Error saving todo:", err);
            });
    };

    const deleteItem = (id) => {
        axios.delete(`https://todo-vl9r.onrender.com/todos/delete/${id}`)
            .then(() => {
                console.log("Deleted Successfully");
                setTodos((prevTodos) => prevTodos.filter((item) => item._id !== id));
            })
            .catch((err) => {
                console.log("Error deleting todo:", err);
            });
    };
    return (
        <div>
            <div className='mainDiv'>
                <div className='input_holder'>
                    <input type='text' className='InText' value={input} placeholder='Enter text' onChange={(e) => setInput(e.target.value)} required />
                    <input type='button' onClick={saveData} className='btn btn-outline-light' value="Add" />
                </div>
                <div className='lists'>
                    {todo.map((data) => <Datas name={data.name} id={data._id} key={data._id} setUpdateContent={setUpdateContent} setShowDropdown={setShowDropdown} deleteItem={deleteItem} />)}
                </div>
            </div>
            {showDropdown && <Update setShowDropdown={setShowDropdown} updateContent={updateContent} setRefresh={setRefresh} />}
        </div>
    )
}

export default Ap;

