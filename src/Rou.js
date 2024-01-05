import React from 'react'

import './App.css'
import SignIn from './components/signIn'
import BTN from './components/button'
import Home from './components/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Todo'

function App() {


    return (
        <>
            <Router basename='sample'>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/sample/login' element={<BTN />} />
                    <Route path='/sample/home' element={<Home />} />
                    <Route path='/sample/todo' element={<Todo/>} />
                </Routes>
            </Router>


        </>
    )
}

export default App
