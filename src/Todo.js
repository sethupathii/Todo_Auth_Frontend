import React, { useEffect, useState } from "react";
import './todo_styles/boot.css'
import Ap from "./AddTodo";
import axios from 'axios';
import { Helmet } from "react-helmet";

const Todo = () => {
    const [dateTime, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    const formatDay = (date) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    };

    const Pulsbtn = async () => {
        try {
            const userInfoString = localStorage.getItem('userInfo');
            console.log("The userInfo is ", userInfoString);
            if (!userInfoString) {
                console.log("UserInfo not available in localStorage.");
                return;
            }

            const userInfo = JSON.parse(userInfoString);
            const { token } = userInfo;

            if (!token) {
                console.log("Token not available in userinfo.");
                return;
            }
            setShow(true);
        } catch (error) {
            console.error("Error while adding task:", error);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Todo-APP</title>
                <meta name="description" content="Todo application"/>
            </Helmet>
            <div className="p-2 text-white rounded App">
                <h1 className="text-center">Todos</h1>
                <div className="ps-5 m-2 text-center text-lg-start">
                    <div className="text-center text-md-start d-inline text-white divs">
                        Today is <h4 className="d-inline text-white">{formatDay(dateTime)}</h4>
                    </div>
                </div>
                <h3 className="ps-5 m-2 text-center text-lg-start">{formatDate(dateTime)}</h3>
                <p className="h4 ps-5 m-2 text-center text-lg-start">{formatTime(dateTime)}</p>
                <h1 className="text-center curser:pointer but btn btn-outline-light d-flex justify-content-center" onClick={Pulsbtn}>Add Task</h1>
            </div>
            {show && <Ap />}
        </div>
    )
}

export default Todo;
