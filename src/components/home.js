import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Home.css';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [ress, setRess] = useState({})
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    if (user && user.token) {
      getData(user.token)
    }
  }, [])
  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token
        }
      }
      const response = await axios.get(`https://todo-vl9r.onrender.com/homes`, config);
      console.log('Request URL:', `https://todo-vl9r.onrender.com/homes`);

      console.log("The response is ", response.data);

      if (response.data === "Invalid Token") {
        alert("login again")
      } else if (response.data === "Server Busy") {
        alert("unauthorized access");
      } else if (response?.status) {
        setRess(response.data);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  const Clicked = () => {
    history.push('/Todo');
  }
  return (
    <div className="back">
      <Helmet>
        <title>Home-Page</title>
        <meta name='description' content='Home page' />
      </Helmet>
      <Container>
        <h1>Welcome to our Website</h1>
        <p className='text-dark text-decoration-none'> We are here to serve you</p>
        <p className='text-dark'>{ress.name}</p>
        <Button type='submit' variant='primary' onClick={Clicked}>Get Started</Button>
      </Container>
    </div>
  );
};

export default Home;
